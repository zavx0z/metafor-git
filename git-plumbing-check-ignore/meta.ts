import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-check-ignore", { desc: "Git check-ignore — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
