function contarPalabras(arr) {
    let contadorPalabras = {}
    arr.forEach(cadena => {
        let palabras = cadena.split(/\s+/)
        palabras.forEach(palabra => {
            if (contadorPalabras[palabra]) {
                contadorPalabras[palabra]++
            }
            else {
                contadorPalabras[palabra] = 1
            }
        })
    });
    return contadorPalabras
}


const palabras = ["Hola buenos días", "Hola buenas noches", "Hola buenas tardes"]
let resultado = contarPalabras(palabras)
console.log(resultado)