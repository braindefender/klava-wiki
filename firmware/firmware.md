# Прошивка

Это программное обеспечение, установленное в [контроллер](/hardware/controllers.md) клавиатуры.

Самыми распространёнными прошивками на данный момент являются [QMK](/firmware/qmk.md), [ZMK](/firmware/zmk.md) и их производные, например [VIA](/firmware/via.md) или [Vial](/firmware/vial.md).

Также, прошивкой называется процесс загрузки нового ПО в контроллер.

Способ прошивки контроллера и формат файлов самой прошивки зависит от контроллера, который вы используете.

Например, [XIAO BLE](/hardware/shields/xiao.md), [nice!nano](/hardware/shields/nice_nano.md) или [SuperMini](/hardware/shields/supermini.md) при перезагрузке в режим [bootloader'а](/dictionary/bootloader.md) определяются ПК как флешка. Чтобы прошить такой контроллер, нужно просто поместить в его директорию файл с прошивкой в формате `UF2`.

Более старые контроллеры (например [ProMicro](/hardware/shields/promicro.md)) при перезагрузке в режим [bootloader'а](/dictionary/bootloader.md) не определяются ПК как флешка. Для их прошивки потребуется специальный софт, например [QMK Toolbox](/software/qmk_toolbox.md).
