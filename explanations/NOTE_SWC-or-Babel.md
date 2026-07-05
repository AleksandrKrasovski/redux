* [Babel](https://babeljs.io/) is a JavaScript `compiler` only
* [SWC](https://swc.rs/) is a JavaScript `compiler` too but else widely used for:
    * Minification
    * Transforming with WebAssembly
    * Usage inside webpack and Rspack (swc-loader)
    * Improving Jest performance (@swc/jest)
    * Custom Plugins
* `Copilot`: 
    * `SWC` is `20x faster` than `Babel` on a `single thread` 
    * `SWC` is `70x faster` than `Babel` on `four cores`
    * `SWC`: лучше для [учебного проекта](https://www.youtube.com/playlist?list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6) 5‑летней давности ради скорости и простоты
    * `Babel`: лучше, если в репозитории курса есть `.babelrc/babel.config` или используются `Babel‑macros/legacy‑decorators`
* Критерии
    * Скорость сборки
        * `SWC` Очень высокая, Rust‑реализация, заметно быстрее в бенчмарках
        * `Babel` Медленнее на больших кодовых базах
    * TypeScript и JSX
        * `SWC` Нативная поддержка и трансформ в один проход
        * `Babel` Через пресеты @babel/preset-typescript и @babel/preset-react
    * Плагины и макросы,
        * `SWC` Экосистема растёт, не поддерживает все Babel‑macros
        * `Babel` Очень зрелая экосистема плагинов и пресетов
    * Декораторы
        * `SWC` Следует TC39/новой семантике
        * `Babel` Поддерживает legacy‑варианты (нужны для старого кода)
    * Интеграция с фреймворками
        * `SWC` Уже дефолт в современных сборщиках; легко ускоряет HMR/CI
        * `Babel` Универсален при кастомных трансформациях