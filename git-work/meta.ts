import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-work", { desc: "Git work — команды работы с индексом и рабочим деревом" })
  .fields((field) => ({
    operation: field.enum("add", "clean", "mv", "restore", "rm", "sparse-checkout").optional({ label: "Тип операции" }),
    args: field.string.optional({ label: "Аргументы" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter(
    ({ value, html }) => html`
      <meta-for
        src="zavx0z/git-work-${value.operation}"
        fields=${{
          args: value.args,
        }} />
    `,
  )
  .bulk()
