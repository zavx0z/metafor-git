import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-cat-file", { desc: "Git cat-file — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
