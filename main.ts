function init_matrix () {
    matrix_breite = 16
    pixel_anzahl = 64
    strip = neopixel.create(DigitalPin.P0, pixel_anzahl, NeoPixelMode.RGB)
    strip.setMatrixWidth(matrix_breite)
    strip.setBrightness(20)
}
input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
})
let strip: neopixel.Strip = null
let pixel_anzahl = 0
let matrix_breite = 0
init_matrix()
basic.forever(function () {
    for (let y = 0; y <= 3; y++) {
        for (let x = 0; x <= matrix_breite; x++) {
            strip.setMatrixColor(x, y, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            basic.pause(20)
            strip.setMatrixColor(x, y, neopixel.colors(NeoPixelColors.Black))
            strip.show()
        }
    }
    serial.writeValue("x", strip.power())
})
