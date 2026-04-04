export default MetaFor("git-submodule", { desc: "Git submodule — управление субмодулями" })
  .fields((field) => ({
    operation: field.enum("submodule").optional({ label: "Тип операции" }),
    args: field.string.optional({ label: "Аргументы" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter()
  .bulk()
