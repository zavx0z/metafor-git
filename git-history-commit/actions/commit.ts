type CommitMode = "commit" | "amend" | "dry-run"

type CommitCommandInput = {
  args: string[]
  cwd?: string
  mode: CommitMode
}

export function parseCommitOptions(argsInput?: string): Record<string, any> {
  const args = argsInput || ""

  if (!args.trim()) {
    throw new Error("Команда не указана")
  }

  const result: Record<string, any> = {}

  if (args.includes("-a") || args.includes("--all")) result.all = true
  if (args.includes("--amend")) result.amend = true
  if (args.includes("-s") || args.includes("--signoff")) result.signoff = true
  if (args.includes("-n") || args.includes("--no-verify")) result.noVerify = true
  if (args.includes("--dry-run")) result.dryRun = true
  if (args.includes("-v") || args.includes("--verbose")) result.verbose = true
  if (args.includes("-e") || args.includes("--edit")) result.edit = true

  const msgMatch = args.match(/-m\s+"([^"]+)"/) || args.match(/-m\s+'([^']+)'/) || args.match(/-m\s+(\S+)/)
  if (msgMatch && msgMatch[1]) {
    result.message = msgMatch[1]
  }

  return result
}

const readProcessStream = async (stream: ReadableStream | null | undefined): Promise<string> => {
  if (!stream) return ""
  return await new Response(stream).text()
}

const normalizeProcessOutput = (stdout: string, stderr: string): string => {
  const chunks = [stdout.trim(), stderr.trim()].filter(Boolean)
  return chunks.join("\n")
}

const includesAny = (args: string[], flags: string[]): boolean => flags.some((flag) => args.includes(flag))

const requiresInteractiveEditor = (input: CommitCommandInput): boolean => {
  if (input.mode === "dry-run") return false
  if (includesAny(input.args, ["-e", "--edit"])) return true

  const hasMessage = includesAny(input.args, ["-m", "--message"])
  const hasNoEdit = input.args.includes("--no-edit")
  return !hasMessage && !hasNoEdit
}

export async function runCommitCommand(input: CommitCommandInput): Promise<string | undefined> {
  if (input.args.length === 0) {
    throw new Error("Git команда не указана")
  }

  if (requiresInteractiveEditor(input)) {
    throw new Error("Интерактивный git commit без сообщения не поддерживается в bulk-режиме")
  }

  const subprocess = Bun.spawn({
    cmd: input.args,
    ...(input.cwd ? { cwd: input.cwd } : {}),
    stdin: "ignore",
    stdout: "pipe",
    stderr: "pipe",
    env: {
      ...process.env,
      GIT_TERMINAL_PROMPT: "0",
    },
  })

  const [exitCode, stdout, stderr] = await Promise.all([
    subprocess.exited,
    readProcessStream(subprocess.stdout),
    readProcessStream(subprocess.stderr),
  ])
  const result = normalizeProcessOutput(stdout, stderr)

  if (exitCode !== 0) {
    throw new Error(result || `Git завершился с кодом ${exitCode}`)
  }

  if (input.mode === "dry-run") {
    return result
  }

  return result
}
