export default MetaFor("tmux", { desc: "tmux — терминальная сессия" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter(
    ({ html }) => html`
      <meta-for src="zavx0z/codex" />
    `,
  )
  .bulk({
    view: ({ css }) => css``,
  })
