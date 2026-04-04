import { describe, expect, test } from "bun:test"
import { detect } from "./detect"

describe("detect", () => {
  test("должен определять операцию 'start' (например, clone)", () => {
    const result = detect({ cmd: "clone https://github.com/example/repo.git" })
    expect(result).toEqual({
      operation: "start",
      args: "https://github.com/example/repo.git",
    })
  })

  test("должен определять операцию 'start' без параметров (например, init)", () => {
    const result = detect({ cmd: "init" })
    expect(result).toEqual({
      operation: "start",
      args: null,
    })
  })

  test("должен определять операцию 'work' (например, add)", () => {
    const result = detect({ cmd: "add ." })
    expect(result).toEqual({
      operation: "work",
      args: ".",
    })
  })

  test("должен определять операцию 'examine' (например, status)", () => {
    const result = detect({ cmd: "status -s" })
    expect(result).toEqual({
      operation: "examine",
      args: "-s",
    })
  })

  test("должен определять операцию 'history' (например, commit)", () => {
    const result = detect({ cmd: 'commit -m "Initial commit"' })
    expect(result).toEqual({
      operation: "history",
      args: '-m "Initial commit"',
    })
  })

  test("должен определять операцию 'collaborate' (например, push)", () => {
    const result = detect({ cmd: "push origin main" })
    expect(result).toEqual({
      operation: "collaborate",
      args: "origin main",
    })
  })

  test("должен определять операцию 'worktree'", () => {
    const result = detect({ cmd: "worktree add -b patch-1" })
    expect(result).toEqual({
      operation: "worktree",
      args: "add -b patch-1",
    })
  })

  test("должен определять операцию 'stash'", () => {
    const result = detect({ cmd: "stash pop" })
    expect(result).toEqual({
      operation: "stash",
      args: "pop",
    })
  })

  test("должен определять операцию 'submodule'", () => {
    const result = detect({ cmd: "submodule update --init" })
    expect(result).toEqual({
      operation: "submodule",
      args: "update --init",
    })
  })

  test("должен определять операцию 'config'", () => {
    const result = detect({ cmd: "config --global user.name" })
    expect(result).toEqual({
      operation: "config",
      args: "--global user.name",
    })
  })

  test("должен выбрасывать ошибку для неизвестной команды", () => {
    expect(() => detect({ cmd: "unknown-command --flag" })).toThrow("Неизвестная команда: unknown-command")
  })

  test("должен выбрасывать ошибку для пустой строки", () => {
    // String.prototype.split(" ") от "" возвращает [""],
    // поэтому parts[0] — это "", что является ложным (falsy) значением.
    expect(() => detect({ cmd: "" })).toThrow("Не удалось извлечь команду")
  })
})
