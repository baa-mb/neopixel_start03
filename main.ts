function init_matrix () {
    not_aus = 0
    pixel_anzahl = 16
    matrix_breite = 4
    strip = neopixel.create(DigitalPin.P0, pixel_anzahl, NeoPixelMode.RGB_RGB)
    strip.setMatrixWidth(matrix_breite)
    strip.setBrightness(150)
}
input.onButtonPressed(Button.A, function () {
    not_aus = 0
})
function pixel_ein (x: number, y: number) {
    strip.setMatrixColor(y, x, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(2000)
    strip.clear()
    basic.pause(2000)
}
input.onButtonPressed(Button.B, function () {
    strip.clear()
})
let stromverbrauch = 0
let strip: neopixel.Strip = null
let matrix_breite = 0
let pixel_anzahl = 0
let not_aus = 0
init_matrix()
// serial.writeValue("x", stromverbrauch)
basic.forever(function () {
    stromverbrauch = strip.power()
    if (stromverbrauch > 45) {
        not_aus = 1
        strip.clear()
    }
    if (not_aus == 0) {
        pixel_ein(0, 1)
    }
})
