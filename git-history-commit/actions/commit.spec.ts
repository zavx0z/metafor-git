import { afterEach, describe, expect, test } from "bun:test"
import { mkdtemp, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { parseCommitOptions, runCommitCommand } from "./commit"

const tempDirs = new Set<string>()

const readProcessStream = async (stream: ReadableStream | null | undefined): Promise<string> => {
  if (!stream) return ""
  return await new Response(stream).text()
}

const runGit = async (cwd: string, args: string[]): Promise<string> => {
  const subprocess = Bun.spawn({
    cmd: ["git", ...args],
    cwd,
    stdin: "ignore",
    stdout: "pipe",
    stderr: "pipe",
  })
  const [exitCode, stdout, stderr] = await Promise.all([
    subprocess.exited,
    readProcessStream(subprocess.stdout),
    readProcessStream(subprocess.stderr),
  ])
  const output = [stdout.trim(), stderr.trim()].filter(Boolean).join("\n")
  if (exitCode !== 0) {
    throw new Error(output || `git ${args.join(" ")} failed with exit code ${exitCode}`)
  }
  return output
}

const createTempGitRepo = async (): Promise<string> => {
  const dir = await mkdtemp(join(tmpdir(), "metafor-git-history-commit-"))
  tempDirs.add(dir)
  await runGit(dir, ["init"])
  await runGit(dir, ["config", "user.name", "Metafor Test"])
  await runGit(dir, ["config", "user.email", "metafor@example.com"])
  return dir
}

afterEach(async () => {
  await Promise.all(Array.from(tempDirs, (dir) => rm(dir, { recursive: true, force: true })))
  tempDirs.clear()
})

describe("git-history-commit actions", () => {
  test("parseCommitOptions извлекает флаги и сообщение", () => {
    expect(parseCommitOptions('-a --amend -s --dry-run -m "hello world"')).toEqual({
      all: true,
      amend: true,
      signoff: true,
      dryRun: true,
      message: "hello world",
    })
  })

  test("runCommitCommand создаёт коммит через argv-based запуск", async () => {
    const dir = await createTempGitRepo()
    await Bun.write(join(dir, "note.txt"), "hello from metafor\n")
    await runGit(dir, ["add", "note.txt"])

    const output = await runCommitCommand({
      args: ["git", "commit", "-m", "Initial commit"],
      cwd: dir,
      mode: "commit",
    })

    expect(output).toContain("Initial commit")
    expect(await runGit(dir, ["log", "--format=%s", "-1"])).toBe("Initial commit")
  })

  test("runCommitCommand возвращает git stderr вместо generic exit code", async () => {
    const dir = await createTempGitRepo()

    const error = await runCommitCommand({
      args: ["git", "commit", "-m", "Nothing to commit"],
      cwd: dir,
      mode: "commit",
    }).catch((reason) => reason as Error)

    expect(error).toBeInstanceOf(Error)
    expect((error as Error).message).not.toBe("Failed with exit code 1")
    expect((error as Error).message.length).toBeGreaterThan(0)
  })

  test("runCommitCommand отклоняет интерактивный commit без сообщения", async () => {
    const dir = await createTempGitRepo()

    const error = await runCommitCommand({
      args: ["git", "commit", "-a"],
      cwd: dir,
      mode: "commit",
    }).catch((reason) => reason as Error)

    expect(error).toBeInstanceOf(Error)
    expect((error as Error).message).toContain("Интерактивный git commit без сообщения")
  })
})
