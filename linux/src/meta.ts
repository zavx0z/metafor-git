export default MetaFor("linux", { desc: "Linux — рабочая среда" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter(
    ({ html }) => html`
      <meta-for src="zavx0z/tmux" />
    `,
  )
  .bulk({
    view: ({ css }) => css``,
  })
