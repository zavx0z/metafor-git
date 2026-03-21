import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-symbolic-ref", { desc: "Git symbolic-ref — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
