export default MetaFor("full-screen", { desc: "Full-screen — переключатель полного экрана браузера" })
  .fields((field) => ({
    active: field.boolean.required(false, { label: "Полный экран" }),
    fallback: field.boolean.required(false, { label: "CSS fallback" }),
    error: field.string.optional({ label: "Ошибка" }),
  }))
  .superposition({
    "обычный режим": {
      "полный экран": { active: true, fallback: false },
      fallback: { active: true, fallback: true },
      ошибка: { error: { null: false } },
    },
    "полный экран": {
      "обычный режим": { active: false, fallback: false },
      fallback: { fallback: true },
      ошибка: { error: { null: false } },
    },
    fallback: {
      "обычный режим": { active: false, fallback: false },
      "полный экран": { active: true, fallback: false },
      ошибка: { error: { null: false } },
    },
    ошибка: {
      "обычный режим": { active: false, fallback: false, error: null },
    },
  })
  .mass({})
  .processes(() => [])
  .reactions(() => [])
  .matter(({ html }) => html``)
  .bulk()
