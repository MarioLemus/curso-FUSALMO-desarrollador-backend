function determinarSiEsPar(readlineIns) {
    readlineIns.question("Digite un numero a evaluar: ", (numero) => {
        if (numero % 2 === 0) {
            console.log("El numero es par")
            readlineIns.close()
        }
        else {
            console.log("El numero es impar")
            readlineIns.close()
        }
    })
}


module.exports = determinarSiEsPar