const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Ingrese una Frase: ", (frase) => {
    r1.question("Ingrese la palabra que se desea reemplazar: ", (palabraCambiar) => {
        r1.question("Ingrese la nueva palabra: ", (palabraNueva) => {
            const fraseModificada = frase.replace(palabraCambiar, palabraNueva)
            console.log(fraseModificada)
        })
    })
})