import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/klava-wiki/",

  title: "Клава Вики",
  description: "Об эргономичных клавиатурах и раскладках",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Статьи",
        collapsed: true,
        items: [
          {
            text: "Как работает клавиатура?",
            link: "/articles/how-keyboard-works",
          },
          {
            text: "Системные и аппаратные раскладки",
            link: "/articles/hardware-vs-software-layout",
          },
        ],
      },
      {
        text: "Словарь",
        collapsed: true,
        items: [
          { text: "Hotswap", link: "/dictionary/hotswap.md" },
          { text: "Коды клавиш", link: "/dictionary/keycode.md" },
          { text: "Лигатуры", link: "/dictionary/ligatures.md" },
          { text: "Модификаторы", link: "/dictionary/mods.md" },
          { text: "Моносплит", link: "/dictionary/monosplit.md" },
          { text: "Пальцы", link: "/dictionary/fingers.md" },
          { text: "Слои", link: "/dictionary/layers.md" },
          { text: "Сплит-клавиатура", link: "/dictionary/split.md" },
          { text: "Стаггер", link: "/dictionary/stagger.md" },
          {
            text: "Стандартная клавиатура",
            link: "/dictionary/standard-keyboard.md",
          },
          { text: "Стем", link: "/dictionary/stem.md" },
          { text: "Тентинг", link: "/dictionary/tenting.md" },
          { text: "Футпринт", link: "/dictionary/footprint.md" },
        ],
      },
      {
        text: "Железо",
        collapsed: true,
        items: [
          {
            text: "Контроллеры",
            collapsed: true,
            link: "/hardware/controllers.md",
            items: [
              {
                text: "Микроконтроллеры",
                items: [
                  { text: "ATmega32U4", link: "/hardware/mcu/ATmega32U4.md" },
                  { text: "nRF52840", link: "/hardware/mcu/nRF52840.md" },
                ],
              },
              {
                text: "Платы",
                items: [
                  { text: "nice!nano", link: "/hardware/shields/nice_nano.md" },
                  { text: "ProMicro", link: "/hardware/shields/promicro.md" },
                  { text: "SuperMini", link: "/hardware/shields/supermini.md" },
                  { text: "XIAO BLE", link: "/hardware/shields/xiao.md" },
                ],
              },
            ],
          },
          {
            text: "Свитчи",
            collapsed: true,
            link: "/hardware/switches.md",
            items: [
              { text: "Choc", link: "/hardware/switches/choc.md" },
              { text: "GLP", link: "/hardware/switches/glp.md" },
              { text: "MX", link: "/hardware/switches/mx.md" },
            ],
          },
          { text: "Кейкапы", link: "/hardware/keycaps.md" },
          { text: "Матрица", link: "/hardware/matrix.md" },
          { text: "Экраны", link: "/hardware/screens.md" },
          { text: "Подсветка", link: "/hardware/led.md" },
        ],
      },
      {
        text: "Прошивки",
        collapsed: true,
        link: "/firmware/firmware.md",
        items: [
          { text: "QMK", link: "/firmware/qmk.md" },
          { text: "ZMK", link: "/firmware/zmk.md" },
          { text: "VIA", link: "/firmware/via.md" },
          { text: "Vial", link: "/firmware/vial.md" },
        ],
      },
      {
        text: "Программы",
        collapsed: true,
        items: [
          { text: "AutoHotkey", link: "/software/ahk.md" },
          { text: "KbdEdit", link: "/software/kbdedit.md" },
          { text: "MSKLC", link: "/software/msklc.md" },
          { text: "Ukelele", link: "/software/ukelele.md" },
        ],
      },
      {
        text: "Клавиатуры",
        collapsed: true,
        items: [
          {
            text: "Bastardkb",
            collapsed: true,
            items: [
              { text: "TBK Mini", link: "/keyboards/bastardkb/TBK_Mini" },
              { text: "Skeletyl", link: "/keyboards/bastardkb/Skeletyl" },
              { text: "Scylla", link: "/keyboards/bastardkb/Scylla" },
            ],
          },
          {
            text: "Ergohaven",
            collapsed: true,
            items: [
              { text: "Planeta", link: "/keyboards/ergohaven/Planeta" },
              { text: "K:03", link: "/keyboards/ergohaven/K_03" },
            ],
          },
          { text: "Corne", link: "/keyboards/Corne" },
          { text: "Kyria", link: "/keyboards/Kyria" },
          { text: "Sofle", link: "/keyboards/Sofle" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "local",
    },
  },
});
