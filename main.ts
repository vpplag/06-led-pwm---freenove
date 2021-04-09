let button_pressed = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        // Debounce
        basic.pause(10)
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            button_pressed = 1
        }
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        // Debounce
        basic.pause(10)
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            button_pressed = 0
        }
    }
})
basic.forever(function () {
    if (button_pressed) {
        for (let counter = 0; counter <= 500; counter++) {
            pins.analogWritePin(AnalogPin.P1, counter)
            basic.pause(1)
            if (!(button_pressed)) {
                pins.analogWritePin(AnalogPin.P1, 0)
                break;
            }
        }
        for (let counter = 0; counter <= 500; counter++) {
            pins.analogWritePin(AnalogPin.P1, 500 - counter)
            basic.pause(1)
            if (!(button_pressed)) {
                pins.analogWritePin(AnalogPin.P1, 0)
                break;
            }
        }
    }
})
