import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-worktree-worktree", { desc: "Git worktree — команда git" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
