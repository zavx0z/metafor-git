import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-history-revert", { desc: "Git revert — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
