import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-count-objects", { desc: "Git count-objects — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
