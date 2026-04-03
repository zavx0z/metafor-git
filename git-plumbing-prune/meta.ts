import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-prune", { desc: "Git prune — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
