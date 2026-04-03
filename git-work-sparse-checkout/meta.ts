import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-work-sparse-checkout", { desc: "Git work-sparse-checkout — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
