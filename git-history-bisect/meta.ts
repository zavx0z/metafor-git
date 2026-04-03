import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-history-bisect", { desc: "Git bisect — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
