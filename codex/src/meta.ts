export default MetaFor("codex", { desc: "Codex — исполнитель внутри tmux" })
  .fields((field) => ({
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter(({ html }) => html``)
  .bulk({
    view: ({ css }) => css``,
  })
