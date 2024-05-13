const ejecutarMenu = require('../menu')

function evaluar(numero) {
    if (numero >= 1) {
        console.log(numero + " El numero es positivo")
    } else if (numero <= -1) {
        console.log(numero + " El numero es negativo")
    } else {
        console.log("El numero es 0")
    }
}

function evaluarSignoNumero(readlineIns) {
    readlineIns.question("Ingrese un numero: ", (numero) => {
        evaluar(numero)
        ejecutarMenu()
        // readlineIns.close()
    })
}

module.exports = evaluarSignoNumero