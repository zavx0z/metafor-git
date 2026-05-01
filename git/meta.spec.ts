import { describe, test, expect, afterAll, beforeAll } from "bun:test"
import { createMetaforSqliteFixture } from "create-metafor/fixture"
import meta from "./meta"
import type { SQL } from "bun"

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

  // Тест преобразования в sqlite db удалён вместе с пакетом @surface/meta —
  // запись теперь идёт через store.update patch-flow (см. dark/patch/meta.ts).
})
