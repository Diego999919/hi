input.onButtonPressed(Button.A, function () {
    podestrein = 1
})
function traffic () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    red()
    basic.pause(10000)
    sonar()
    if (podestrein == 1) {
        if (sound == 1) {
            Green()
            basic.showLeds(`
                # . . . #
                # . . . #
                # . # . #
                # . # . #
                . # . # .
                `)
            for (let index = 0; index < 5; index++) {
                music.playTone(740, music.beat(BeatFraction.Whole))
                basic.pause(450)
                music.playTone(554, music.beat(BeatFraction.Whole))
                basic.pause(450)
            }
            for (let countdown = 0; countdown <= 9; countdown++) {
                basic.showNumber(9 - countdown)
                music.playTone(554, music.beat(BeatFraction.Whole))
            }
            music.playTone(277, music.beat(BeatFraction.Breve))
            yellow()
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.pause(5000)
            podestrein = 0
            sound = 0
        } else {
            Green()
            basic.showLeds(`
                # . . . #
                # . . . #
                # . # . #
                # . # . #
                . # . # .
                `)
            basic.pause(10000)
            for (let countdown = 0; countdown <= 9; countdown++) {
                basic.showNumber(9 - countdown)
                basic.pause(400)
            }
            yellow()
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.pause(5000)
            podestrein = 0
        }
    }
    if (car < 5) {
        Green()
        basic.pause(10000)
        yellow()
        basic.pause(5000)
    }
}
input.onButtonPressed(Button.B, function () {
    podestrein = 1
    sound = 1
})
function yellow () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function red () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function sonar () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    car = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
}
function Green () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
let car = 0
let sound = 0
let podestrein = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
let power = 1
podestrein = 0
sound = 0
car = 0
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(255)
while (power == 1) {
    traffic()
}
