import { MetaFor } from "@metafor/dsl"

export default MetaFor("git-examine", { desc: "Git examine — команды просмотра (show, status, diff, log)" })
  .fields((field) => ({
    operation: field.enum("show", "status", "describe", "log", "diff", "range-diff", "shortlog").optional({ label: "Тип операции" }),
    args: field.string.optional({ label: "Аргументы" }),
  }))
  .superposition({})
  .mass({})
  .processes(() => ({}))
  .reactions(() => [])
  .matter(({ value, html }) => html`
      <meta-for src="zavx0z/git-examine-${value.operation}" fields=${{ args: value.args }} />
    `)
  .bulk()
