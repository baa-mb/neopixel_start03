function init_matrix () {
    not_aus = 0
    pixel_anzahl = 64
    matrix_breite = 8
    strip = neopixel.create(DigitalPin.P0, pixel_anzahl, NeoPixelMode.RGB)
    strip.setMatrixWidth(matrix_breite)
    strip.setBrightness(50)
    baa_start()
}
function baa_start () {
    for (let y = 0; y <= 7; y++) {
        for (let x = 0; x <= matrix_breite - 1; x++) {
            pixel_ein(x, y)
        }
    }
    basic.pause(5000)
    strip.clear()
    strip.show()
}
function pixel_ein (x: number, y: number) {
    y_korr = Math.abs(x % 2 * 7 - y)
    strip.setMatrixColor(y_korr, x, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(100)
}
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.show()
})
/**
 * serial.writeValue("x", stromverbrauch)
 */
let y_korr = 0
let matrix_breite = 0
let pixel_anzahl = 0
let not_aus = 0
let strip: neopixel.Strip = null
namespace baaNeop {
    //% block
    export function helloWorld() {
        baa_start()
    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function camlCaseTwo() {
        basic.showNumber(112)
    }
    
    //% block
    export function ZeigeName() {
        basic.showString("Bachinger Alois")
    }

    //% block
    export function ZeigeDrei() {
       strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }

}
init_matrix()
