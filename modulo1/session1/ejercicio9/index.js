const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Ingrese una palabra: ", (palabra) => {
    const vocales = palabra.match(/[aeiou]/gi)
    const numeroVocales = vocales ? vocales.length : 0
    console.log(`Numeor de vocales: ${numeroVocales}`)
})