import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-history-reset", { desc: "Git reset — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
