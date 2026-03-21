import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-diff-tree", { desc: "Git diff-tree — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
