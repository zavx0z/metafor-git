export default MetaFor("git-stash", { desc: "Git stash — отложенные изменения" })
  .fields((field) => ({
    operation: field.enum("stash").optional({ label: "Тип операции" }),
    args: field.string.optional({ label: "Аргументы" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter(({ value, html }) => html`
      <meta-for src="zavx0z/git-stash-${value.operation}" fields=${{ args: value.args }} />
    `)
  .bulk()
