function determinarSiEsPar(readlineIns, menu) {
    readlineIns.question("Digite un numero a evaluar: ", (numero) => {
        if (numero % 2 === 0) {
            console.log("El numero es par\n")
            menu()
        }
        else {
            console.log("El numero es impar\n")
            menu()
        }
    })
}


module.exports = determinarSiEsPar