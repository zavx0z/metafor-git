# TODO

## Уточнить модель full-screen

- Состояния не должны дублировать поля.
- `superposition` описывает фазу автомата: `обычный режим`, `полный экран`, `ошибка`.
- `fields` описывает данные актора, а не зеркала состояний.
- `method` должен быть nullable enum: `null | "native" | "css"`.
- `method = null` означает, что способ fullscreen не выбран или fullscreen выключен.
- `method = "native"` означает вход через browser fullscreen API.
- `method = "css"` означает CSS fallback.
- При выходе из fullscreen `method` должен сбрасываться в `null`.
- К текущей декларации `src/meta.ts` нужно вернуться позже и привести ее к этой модели.
