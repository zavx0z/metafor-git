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

type Data = {
  operation: "start" | "work" | "examine" | "history" | "collaborate" | "worktree" | "stash" | "submodule" | "config" | "plumbing" | null
  command: string
  args: string | null
}

export function detect(cmd: string): Data {
  const parts = cmd.split(" ")
  const command = parts[0]
  if (!command) {
    throw new Error("Не удалось извлечь команду")
  }
  const args = parts.length > 1 ? parts.slice(1).join(" ") : null
  let operation: Data['operation'] = null
  for (const [key, regex] of Object.entries(patterns)) {
    if ((regex as RegExp).test(command)) {
      operation = key as Data['operation']
      break
    }
  }
  if (!operation) {
    throw new Error(`Неизвестная команда: ${command}`)
  }
  return {operation, command, args}
}
