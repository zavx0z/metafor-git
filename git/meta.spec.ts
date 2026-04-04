import { describe, test, expect } from "bun:test"
import { createMetaforSqliteFixture } from "create-metafor/fixture"
import meta from "./meta"

describe("meta", () => {
  test("dsl формат", () => {
    expect(meta).toMatchSnapshot()
  })

  test("преобразование в sqlite db", () => {
    createMetaforSqliteFixture(meta)
    expect(true).toBe(true)
  })
})
