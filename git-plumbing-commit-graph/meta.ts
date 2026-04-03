import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-commit-graph", { desc: "Git commit-graph — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
