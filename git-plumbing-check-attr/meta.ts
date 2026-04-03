import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-check-attr", { desc: "Git check-attr — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
