import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-examine-range-diff", { desc: "Git range-diff — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
