function evaluar(numero) {
    if (numero >= 1) {
        console.log(numero + " El numero es positivo\n")
    } else if (numero <= -1) {
        console.log(numero + " El numero es negativo\n")
    } else {
        console.log("El numero es 0\n")
    }
}

function evaluarSignoNumero(readlineIns, menu) {
    readlineIns.question("Ingrese un numero: ", (numero) => {
        evaluar(numero)
        menu()
    })
}

module.exports = evaluarSignoNumero