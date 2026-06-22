# Entity Particles

Рабочая таблица соответствия сущностей SQLite и Force-частиц.

`Сигнал в коде` означает прямой сигнал, найденный в текущих `emit`/`apply` путях.
`Носитель изменения` означает смысловой канал для патча сущности. `—` означает, что соответствие пока не найдено или не утверждено.

| Entity                     | Сущность по-русски              | Краткое описание                                       | Сигнал в коде                           | Носитель изменения        |
| -------------------------- | ------------------------------- | ------------------------------------------------------ | --------------------------------------- | ------------------------- |
| `wimp`                     | вимп / мета                     | Корневая декларация меты: `src`, имя, описание, view.  | `graviton`, path `wimp`                 | `graviton`                |
| `wimp_mass_value`          | масса вимпа                     | Дерево mass-данных декларации.                         | —                                       | —                         |
| `field`                    | поле                            | Описание поля актора внутри меты.                      | через snapshot `wimp`                   | `higgs`                   |
| `field_default`            | дефолт поля                     | Маркер наличия значения по умолчанию.                  | через snapshot `wimp`                   | `higgs`                   |
| `field_string_default`     | строковый дефолт                | Значение по умолчанию для `string` поля.               | —                                       | `higgs`                   |
| `field_number_default`     | числовой дефолт                 | Значение по умолчанию для `number` поля.               | —                                       | `higgs`                   |
| `field_boolean_default`    | булев дефолт                    | Значение по умолчанию для `boolean` поля.              | —                                       | `higgs`                   |
| `field_array_default_item` | элемент array-дефолта           | Элемент дефолтной множественности topology.            | —                                       | `higgs`                   |
| `field_enum_variant`       | вариант enum                    | Вариант выбора topology-ветви.                         | через snapshot `wimp`                   | `higgs`                   |
| `field_enum_default`       | enum-дефолт                     | Вариант enum по умолчанию.                             | —                                       | `higgs`                   |
| `state`                    | состояние                       | Декларация состояния автомата меты.                    | `graviton`, path `state`                | `higgs`                   |
| `transition`               | переход                         | Декларация перехода между состояниями.                 | `graviton`, path `transition`           | `z`                       |
| `condition`                | условие перехода                | Группа условий, разрешающая переход.                   | `graviton`, path `condition`            | `z`                       |
| `condition_predicate`      | предикат условия                | Конкретная проверка значения или длины.                | `graviton`, path `predicate`            | `z`                       |
| `condition_list_item`      | элемент списка условия          | Элемент списка для `in` / `not_in` условий.            | —                                       | `z`                       |
| `actor`                    | актор                           | Проявленный экземпляр меты в пространстве.             | `graviton`, path `actor`                | `graviton`                |
| `actor_value`              | значение поля актора            | Связь актор + поле + value.                            | через snapshot `actor`                  | `gluon` / `higgs`         |
| `value`                    | значение                        | Типизированный контейнер значения.                     | через snapshot `actor`                  | `gluon` / `higgs`         |
| `value_boolean`            | булево значение                 | Скалярное значение `boolean`.                          | через snapshot `actor`                  | `gluon`                   |
| `value_number`             | числовое значение               | Скалярное значение `number`.                           | через snapshot `actor`                  | `gluon`                   |
| `value_string`             | строковое значение              | Скалярное значение `string`.                           | через snapshot `actor`                  | `gluon`                   |
| `value_enum`               | enum-значение                   | Выбранный вариант topology-ветви.                      | через snapshot `actor`                  | `higgs`                   |
| `value_list_item`          | элемент list-значения           | Элемент множественности / списка значения.             | через snapshot `actor`                  | `higgs`                   |
| `actor_state`              | состояние актора                | Текущее состояние конкретного актора.                  | через snapshot `actor`                  | `photon`                  |
| `topology`                 | topology-узел                   | Узел `fuzzy`, `axion` или `macho` в проявленной форме. | `graviton`, path `fuzzy/axion/macho`    | `graviton`                |
| `topology_fuzzy_state`     | состояние fuzzy topology        | Текущий выбранный actor/topology внутри fuzzy-узла.    | —                                       | `photon` / `higgs`        |
| `matter_particle`          | частица matter                  | Узел исходной matter-структуры меты.                   | `graviton`, path `matter`               | `graviton`                |
| `matter_particle_wimp`     | matter-вимп                     | Matter-узел, ссылающийся на другую мету.               | `graviton`, path `matter`               | `graviton`                |
| `matter_particle_fuzzy`    | matter-fuzzy                    | Условный или dynamic-meta matter-узел.                 | `graviton`, path `matter`               | `graviton`                |
| `matter_particle_axion`    | matter-axion                    | Условная ветка matter-структуры.                       | `graviton`, path `matter`               | `graviton`                |
| `matter_particle_macho`    | matter-macho                    | Коллекционная ветка matter-структуры.                  | `graviton`, path `matter`               | `graviton`                |
| `matter_binding`           | matter-привязка                 | Static/variable/dynamic привязка данных matter.        | через `matter`                          | `graviton`                |
| `matter_binding_dep`       | зависимость matter-привязки     | Путь зависимости dynamic/variable привязки.            | через `matter`                          | `graviton`                |
| `process`                  | процесс                         | Декларация action/finally процесса меты.               | `graviton`, path `process`              | `z`                       |
| `process_env`              | среда процесса                  | Допустимая среда исполнения процесса.                  | `graviton`, path `process_env`          | `z`                       |
| `process_action`           | action-процесс                  | Исполняемое действие процесса.                         | `graviton`, path `process_action`       | `z`                       |
| `process_action_read`      | чтение action-процесса          | Поля, читаемые action-процессом.                       | `graviton`, path `process_action_read`  | `z`                       |
| `process_action_write`     | запись action-процесса          | Поля, записываемые по success/error.                   | `graviton`, path `process_action_write` | `z`                       |
| `process_finally`          | finally-процесс                 | Процесс после изменения состояния.                     | `graviton`, path `process_finally`      | `z`                       |
| `process_finally_read`     | чтение finally-процесса         | Поля, читаемые finally-процессом.                      | `graviton`, path `process_finally_read` | `z`                       |
| `reaction`                 | реакция                         | Декларация реактивного обновления.                     | `graviton`, path `reaction`             | `photon`                  |
| `reaction_state`           | состояние реакции               | Состояния, в которых реакция активна.                  | `graviton`, path `reaction_state`       | `photon`                  |
| `reaction_read`            | чтение реакции                  | Поля, читаемые реакцией.                               | `graviton`, path `reaction_read`        | `photon`                  |
| `reaction_write`           | запись реакции                  | Поля, записываемые реакцией.                           | `graviton`, path `reaction_write`       | `photon`                  |
| `sqlite_sequence`          | sqlite sequence                 | Служебная таблица autoincrement.                       | —                                       | —                         |

## Notes

1. `w+` и `w-` сейчас не имеют отдельной persisted-сущности в SQLite. Они описывают результат прохождения процесса: успех или ошибку.
2. `graviton` сейчас используется в коде шире, чем финальная смысловая карта: многие декларативные добавления рождают структурный control-сигнал.
3. Для числового `path` нужен отдельный утвержденный адресный слой. Иначе `id = 1` конфликтует между `field`, `state`, `transition`, `actor` и другими таблицами.
