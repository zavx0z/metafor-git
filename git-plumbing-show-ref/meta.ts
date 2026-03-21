import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-show-ref", { desc: "Git show-ref — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
