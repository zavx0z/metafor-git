import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-diff-index", { desc: "Git diff-index — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
