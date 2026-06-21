export default MetaFor("test-meta", { desc: "Test Meta" })
  .fields((field) => ({
    error: field.string.optional({ label: "Error" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter(({ html }) => html``)
  .bulk({
    view: ({ css }) => css``,
  })
