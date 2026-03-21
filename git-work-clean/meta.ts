import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-work-clean", { desc: "Git work-clean — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
