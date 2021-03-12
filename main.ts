function init_matrix () {
    not_aus = 0
    pixel_anzahl = 64
    matrix_breite = 8
    strip = neopixel.create(DigitalPin.P0, pixel_anzahl, NeoPixelMode.RGB)
    strip.setMatrixWidth(matrix_breite)
    strip.setBrightness(255)
}
input.onButtonPressed(Button.A, function () {
    not_aus = 0
})
function pixel_ein (x: number, y: number) {
    y_korr = Math.abs(x % 2 * 7 - y)
    strip.setMatrixColor(y_korr, x, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(100)
}
input.onButtonPressed(Button.B, function () {
    strip.clear()
})
let stromverbrauch = 0
let y_korr = 0
let strip: neopixel.Strip = null
let matrix_breite = 0
let pixel_anzahl = 0
let not_aus = 0
init_matrix()
// serial.writeValue("x", stromverbrauch)
serial.writeValue("x", NeoPixelColors.Red)
console.log(NeoPixelColors.Violet);
basic.forever(function () {
    stromverbrauch = strip.power()
    if (stromverbrauch > 45) {
        not_aus = 1
        strip.clear()
    }
    if (not_aus == 0) {
        for (let x = 0; x <= matrix_breite - 1; x++) {
            for (let y = 0; y <= 7; y++) {
                pixel_ein(x, y)
            }
            basic.pause(1000)
            strip.clear()
            strip.show()
        }
    }
})
