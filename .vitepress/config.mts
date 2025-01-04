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

    outline: {
      label: "На этой странице",
    },

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
            text: "Проблемы системных раскладок",
            link: "/articles/system-layout-problems",
          },
        ],
      },
      {
        text: "Железо",
        items: [
          {
            text: "Управление курсором",
            collapsed: true,
            items: [
              { text: "Мышь", link: "/input/cursor/mouse" },
              { text: "Трекбол", link: "/input/cursor/trackball" },
              { text: "Трекпад", link: "/input/cursor/trackpad" },
              { text: "Трекпоинт", link: "/input/cursor/trackpoint" },
            ],
          },
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
                  {
                    text: "nice!nano",
                    link: "/hardware/shields/nice_nano.md",
                  },
                  { text: "ProMicro", link: "/hardware/shields/promicro.md" },
                  {
                    text: "SuperMini",
                    link: "/hardware/shields/supermini.md",
                  },
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
        link: "/firmware/firmware.md",
        items: [
          { text: "QMK", link: "/firmware/qmk.md" },
          { text: "ZMK", link: "/firmware/zmk.md" },
          { text: "VIA", link: "/firmware/via.md" },
          { text: "Vial", link: "/firmware/vial.md" },
        ],
      },
      {
        text: "Раскладки",
        items: [
          {
            text: "Аппаратные",
            collapsed: true,
            items: [
              {
                text: "Callum",
                link: "/layouts/hardware/callum",
              },
            ],
          },
          {
            text: "Системные",
            collapsed: true,
            link: "/layouts/software",
            items: [
              {
                text: "Universal Layout",
                link: "/layouts/software/universal-layout",
              },
            ],
          },
          {
            text: "Комбинированные",
            collapsed: true,
            link: "/layouts/combined",
            items: [
              {
                text: "Wellum",
                link: "/layouts/combined/wellum",
              },
            ],
          },
          {
            text: "Стрелки",
            link: "/layouts/arrows",
          },
        ],
      },
      {
        text: "Приложения",
        collapsed: true,
        items: [
          { text: "AutoHotkey", link: "/software/ahk.md" },
          { text: "KbdEdit", link: "/software/kbdedit.md" },
          { text: "MSKLC", link: "/software/msklc.md" },
          { text: "Ukelele", link: "/software/ukelele.md" },
          { text: "QMK Toolbox", link: "/software/qmk_toolbox.md" },
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
              { text: "Scylla", link: "/keyboards/bastardkb/Scylla" },
              { text: "Skeletyl", link: "/keyboards/bastardkb/Skeletyl" },
              { text: "TBK Mini", link: "/keyboards/bastardkb/TBK_Mini" },
            ],
          },
          {
            text: "Ergohaven",
            collapsed: true,
            items: [
              { text: "HPD", link: "/keyboards/ergohaven/HPD" },
              { text: "Imperial44", link: "/keyboards/ergohaven/Imperial44" },
              { text: "K:03 Pro", link: "/keyboards/ergohaven/K_03_Pro" },
              { text: "K:03", link: "/keyboards/ergohaven/K_03" },
              { text: "Planeta", link: "/keyboards/ergohaven/Planeta" },
              { text: "Velvet", link: "/keyboards/ergohaven/Velvet" },
            ],
          },
          { text: "Corne", link: "/keyboards/Corne" },
          { text: "Kyria", link: "/keyboards/Kyria" },
          { text: "Sofle", link: "/keyboards/Sofle" },
        ],
      },
      {
        text: "Словарь",
        collapsed: true,
        link: "/dictionary",
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
