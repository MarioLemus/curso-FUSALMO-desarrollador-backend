const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Ingrese una cadena de texto: ", (cadena) => {
    const INICIO = 6
    const LONGITUD = 5
    const subcadena = cadena.substring(INICIO, INICIO + LONGITUD)
    console.log(subcadena)
})