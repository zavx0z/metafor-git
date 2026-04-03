import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-check-mailmap", { desc: "Git check-mailmap — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
