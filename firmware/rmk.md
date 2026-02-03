# RMK

Клавиатурная прошивка для беспроводных и проводных клавиатур.

Написана на [Rust](https://rust-lang.org), использует под капотом [Embassy](https://github.com/embassy-rs/embassy).

Поддерживает довольно большое [количество контроллеров](https://rmk.rs/docs/getting_started/supported_hardwares.html)

Поддерживает real-time конфигурацию через [Vial](/firmware/vial.md).

В отличие от [QMK](/firmware/qmk.md), где файлы конфигурации клавиатуры являются файлами на языке C, и [ZMK](/firmware/zmk.md), где конфигурация клавиатуры представляет из себя набор `.dtsi` файлов, в RMK конфигурация клавиатуры задаётся в одном TOML-файле.
