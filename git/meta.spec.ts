import { describe, test, expect } from "bun:test"
import meta from "./meta"

describe("meta", () => {
  test("dsl формат", () => {
    expect(meta).toMatchSnapshot()
  })
})
