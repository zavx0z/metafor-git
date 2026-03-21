import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-examine-show", { desc: "Git show — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
