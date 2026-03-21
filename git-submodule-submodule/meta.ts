import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-submodule-submodule", { desc: "Git submodule — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
