import type {Values} from ".."

export type In = {
  cmd: string
}

export type Out = {
  operation: Values["operation"],
  args: Values["args"]
}