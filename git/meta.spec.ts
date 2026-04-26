import { describe, test, expect, afterAll, beforeAll } from "bun:test"
import { createMetaforSqliteFixture } from "create-metafor/fixture"
import meta from "./meta"
import type { SQL } from "bun"
import { metaCreate } from "@store/meta/sqlite"

describe("meta", () => {
  let db: SQL
  beforeAll(async () => {
    db = await createMetaforSqliteFixture()
  })
  afterAll(async () => {
    await db.close()
  })

  test("dsl формат", () => {
    expect(meta).toMatchSnapshot()
  })

  test("преобразование в sqlite db", async () => {
    await metaCreate(db, "zavx0z/git", meta)
    expect(true).toBe(true)
  })
})
