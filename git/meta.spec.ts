import { describe, test, expect, afterAll, beforeAll } from "bun:test"
import { createMetaforSqliteFixture } from "create-metafor/fixture"
import meta from "./meta"
import type { Database } from "bun:sqlite"
import {relation} from "@pkg/sqlite"

describe("meta", () => {
  let db: Database
  beforeAll(() => (db = createMetaforSqliteFixture()))
  afterAll(() => db.close())

  test("dsl формат", () => {
    expect(meta).toMatchSnapshot()
  })

  test("преобразование в sqlite db", () => {
    relation(db, meta, "zavx0z/git")
    expect(true).toBe(true)
  })
})
