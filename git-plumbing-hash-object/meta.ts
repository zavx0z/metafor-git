import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-hash-object", { desc: "Git hash-object — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
