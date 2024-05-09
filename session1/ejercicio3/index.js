const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Ingrese una palabra: ", (palabra) => {
    console.log(`${palabra.toUpperCase()}`)
})