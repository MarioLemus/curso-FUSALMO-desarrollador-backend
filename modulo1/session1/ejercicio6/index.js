const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Ingrese una frase: ", (frase) => {
    const numeroDePalabras = frase.split(' ').length
    console.log(numeroDePalabras)
})