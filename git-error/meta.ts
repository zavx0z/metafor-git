import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-error", { desc: "Git error — актор ошибки" })
  .fields((field) => ({
    message: field.string.optional({ label: "Сообщение ошибки" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
