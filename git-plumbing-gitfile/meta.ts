import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-gitfile", { desc: "Git gitfile — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
