function chequearPar (numero) {
    if (numero % 2 === 0) {
        console.log("El numero es par\n")
        return
    }
    console.log("El numero es impar\n")
}

function determinarSiEsPar(readlineIns, menu) {
    readlineIns.question("Digite un numero a evaluar: ", (numero) => {
        chequearPar(numero)
        menu()
    })
}


module.exports = {determinarSiEsPar}