import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-plumbing-fast-import", { desc: "Git fast-import — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter()
  .bulk()
