import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-collaborate-fetch", { desc: "Git fetch — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
