# Swapper и Tabber

Это специальные макросы для [Alt](/dictionary.md#alt)+Tab, [Gui](/dictionary.md#gui)+Tab, [Ctrl](/dictionary.md#ctrl)+Tab, которые позволяют циклично переключать окна и вкладки.

Макросы предназначены для использования в [слое](/dictionary.md#слой).

При зажатии клавиши слоя и первичном нажатии на макрос, происходит **зажатие** `Alt`/`Gui`/`Ctrl` и однократное нажатие `Tab`. При повторном вызове макроса — нажимается лишь `Tab`.

При отжатии клавиши слоя [модификаторы](/dictionary.md#модификатор) `Alt`/`Gui`/`Ctrl` отпускаются.

При этом, можно дополнительно зажать клавишу `Shift`, чтобы инвертировать направление переключения.


::: details Реализация в [QMK](/firmware/qmk.md). Источник [callum-oakley](https://github.com/callum-oakley/qmk_firmware/blob/master/users/callum)
::: code-group
```c [swapper.h]
#pragma once

#include QMK_KEYBOARD_H

// Implements cmd-tab like behaviour on a single key. On first tap of trigger
// cmdish is held and tabish is tapped -- cmdish then remains held until some
// other key is hit or released. For example:
//
//     trigger, trigger, a -> cmd down, tab, tab, cmd up, a
//     nav down, trigger, nav up -> nav down, cmd down, tab, cmd up, nav up
//
// This behaviour is useful for more than just cmd-tab, hence: cmdish, tabish.
void update_swapper(
    bool *active,
    uint16_t cmdish,
    uint16_t tabish,
    uint16_t trigger,
    uint16_t reverse_key,
    uint16_t keycode,
    keyrecord_t *record
);
```
```c [swapper.c]
#include "swapper.h"

void update_swapper(
    bool *active,
    uint16_t cmdish,
    uint16_t tabish,
    uint16_t trigger,
    uint16_t reverse_key,
    uint16_t keycode,
    keyrecord_t *record
) {
    if (keycode == trigger) {
        if (record->event.pressed) {
            if (!*active) {
                *active = true;
                register_code(cmdish);
            }
            register_code(tabish);
        } else {
            unregister_code(tabish);
        }
    } else if (*active
        && keycode != reverse_key
        && keycode != KC_LEFT
        && keycode != KC_RIGHT
    ) {
        unregister_code(cmdish);
        *active = false;
    }
}
```
```c [keymap.c]
enum keycodes {
    OS_SHFT = SAFE_RANGE,

    SW_ALT_TAB,  // Switch to next window (Windows) (alt-tab)
    SW_CMD_TAB,  // Switch to next window (macOS)   (cmd-tab)
    SW_CTRL_TAB, // Switch to next browser tab      (ctrl-tab)
};

bool sw_alt_tab_active = false;
bool sw_cmd_tab_active = false;
bool sw_ctrl_tab_active = false;

bool process_record_user(uint16_t keycode, keyrecord_t *record) {
    update_swapper(
        &sw_alt_tab_active, KC_LALT, KC_TAB, SW_ALT_TAB, OS_SHFT,
        keycode, record
    );
    update_swapper(
        &sw_cmd_tab_active, KC_LGUI, KC_TAB, SW_CMD_TAB, OS_SHFT,
        keycode, record
    );
    update_swapper(
        &sw_ctrl_tab_active, KC_LCTL, KC_TAB, SW_CTRL_TAB, OS_SHFT,
        keycode, record
    );
    return true
}
```
:::

::: details Реализация в [ZMK](/firmware/zmk.md)
```c [keymap.keymap]
// Макрос предназначен для использования в слое, поэтому будет необходимо
// сбросить зажатые модификаторы LCTL, LGUI или LALT, например
// при отпускании слоя с помощью macro_release &kp LCTRL &kp LGUI &kp LALT
//
// Реализация этого дела остаётся за пользователем.

#define PARAM_1 0
#define PARAM_2 0

#define MACRO_TWO_PARAM(NAME, BINDINGS) MACRO(NAME, "zmk,behavior-macro-two-param", 2, BINDINGS)

#define MODMORPH(NAME, NORMAL, MORPHED, MODS, KEEP_MODS) \
    NAME: NAME { \
        compatible = "zmk,behavior-mod-morph"; \
        #binding-cells = <0>; \
        bindings = <NORMAL>, <MORPHED>; \
        mods = <(MODS)>; \
        keep-mods = <(KEEP_MODS)>; \
    };

/ {
    behaviors {
        MACRO_TWO_PARAM(
            m_hold_mod_press_key,
            &macro_press
                &macro_param_1to1 &kp PARAM_1
            &macro_tap
                &macro_param_2to1 &kp PARAM_2
        )

        MODMORPH(
            ctrl_tab,
            &m_hold_mod_press_key LCTRL TAB,
            &kp TAB,
            MOD_LCTL,
            MOD_LCTL
        )

        MODMORPH(
            cmd_tab,
            &m_hold_mod_press_key LGUI TAB,
            &kp TAB,
            MOD_LGUI,
            MOD_LGUI
        )

        MODMORPH(
            alt_tab,
            &m_hold_mod_press_key LALT TAB,
            &kp TAB,
            MOD_LALT,
            MOD_LALT
        )

    };
};
```
:::
