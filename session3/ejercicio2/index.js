function comparadorNumeros (numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3) {
        console.log(numero1 + " es mayor")
    } else if (numero2 > numero1 && numero2 > numero3) {
        console.log(numero2 + " es mayor")
    } else if (numero3 > numero1 && numero3 > numero2) {
        console.log(numero3 + " es mayor")
    }
}

function compararNumeros(readlineIns) {
    readlineIns.question("Ingrese el primer numero: ", (numero1) => {
        readlineIns.question("Ingrese el segundo numero: ", (numero2) => {
            readlineIns.question("Ingrese el tercer numero: ", (numero3) => {
                comparadorNumeros(parseFloat(numero1), parseFloat(numero2), parseFloat(numero3))
                readlineIns.close()
            })
        })
    })
}


module.exports = compararNumeros