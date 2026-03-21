import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-update-index", { desc: "Git update-index — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
