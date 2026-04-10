import type { In, Out } from "./detect.t"

const patterns = {
  start: /^(clone|init)$/,
  work: /^(add|mv|restore|rm|clean|sparse-checkout)$/,
  examine: /^(show|status|diff|log|range-diff|shortlog|describe)$/,
  history: /^(switch|checkout|commit|reset|revert|bisect|repair)$/,
  collaborate: /^(fetch|pull|push|remote)$/,
  worktree: /^worktree$/,
  stash: /^stash$/,
  submodule: /^submodule$/,
  config: /^(config|help)$/,
} as Record<string, RegExp>

export function detect({ cmd }: In): Out {
  const tokens = cmd
    .trim()
    .split(/\s+/)
    .filter((token) => token.length > 0)

  if (tokens[0] === "git") {
    tokens.shift()
  }

  const [command, ...parts] = tokens

  if (!command) throw new Error("Не удалось извлечь команду")

  let operation: Out["operation"] = null
  for (const [key, regex] of Object.entries(patterns)) {
    if ((regex as RegExp).test(command)) {
      operation = key as Out["operation"]
      break
    }
  }
  if (!operation) throw new Error(`Неизвестная команда: ${command}`)

  const args = parts.length ? parts.join(" ") : null

  return { operation, args }
}
