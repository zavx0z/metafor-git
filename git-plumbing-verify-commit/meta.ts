import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-verify-commit", { desc: "Git verify-commit — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
