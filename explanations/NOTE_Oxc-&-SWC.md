
* [Oxc](https://oxc.rs/) & [SWC](https://swc.rs/) vs [Babel](https://babeljs.io/)
    * `Copilot`
        * `Oxc` & `Babel`
            * `Oxc` не покрывает всю экосистему плагинов и макросов
            * `Oxc` дополняет `Babel`
        * `Oxc` & `SWC`
            * `Rust‑инструменты` для работы с `JS/TS`
            * их сочетание лучше `Babel`
                * `Oxc` 
                    * parser (`3x` faster than `SWC`)
                    * linter (`50x` faster than `ESLint`)
                    * Support for `ESLint JS Plugins`
                    * transform (Syntax lowering to `ES2015`)
                    * formatter (`30x` faster than `Prettier`)
                        * `Tailwind` class sorting support
                    * minify
                        * Dead code elimination
                        * Syntax shortening & whitespace removal
                * `SWC` как транспайлер/плагиновая_платформа