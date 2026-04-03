import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-fast-export", { desc: "Git fast-export — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
