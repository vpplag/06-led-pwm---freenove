let state = 0
let counter = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        // Debounce
        basic.pause(10)
        if (pins.digitalReadPin(DigitalPin.P0) == 0) {
            state = 0
        }
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        // Debounce
        basic.pause(10)
        if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            state = 1
        }
    }
})
basic.forever(function () {
    while (state) {
        for (let counter = 0; counter <= 500; counter++) {
            pins.analogWritePin(AnalogPin.P1, counter)
            basic.pause(1)
        }
        for (let counter = 0; counter <= 500; counter++) {
            pins.analogWritePin(AnalogPin.P1, 500 - counter)
            basic.pause(1)
        }
    }
})
