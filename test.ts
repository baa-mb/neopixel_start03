// Hier kann man Tests durchführen; diese Datei wird nicht kompiliert, wenn dieses Paket als Erweiterung verwendet wird.

/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace libBaa {
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

    // Hier wird die Hardware initialisiert......

    // let baa: neopixel.Strip = null;
    // baa = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB);
    // baa.showColor(neopixel.colors(NeoPixelColors.Black));



}

