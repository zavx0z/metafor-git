import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-verify-tag", { desc: "Git verify-tag — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
