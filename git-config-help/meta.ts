import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-config-help", { desc: "Git help — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
