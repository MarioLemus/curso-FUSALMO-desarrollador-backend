const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Ingrese una palabra: ", (palabra) => {
    const esPalindromo = palabra.split('').reverse().join('') === palabra
    if (esPalindromo) console.log(`${palabra} es un palindromo`)
    else console.log(`${palabra} NO es un palindromo`)
})