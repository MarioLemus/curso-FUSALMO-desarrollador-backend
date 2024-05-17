function combinarColores(numero1, numero2) {
    if (
        numero1 !== numero2 &&
        (numero1 === "azul" || numero1 === "amarillo") && 
        (numero2 === "azul" || numero2 === "amarillo")
    ) {
        console.log("verde\n")
    } else if (
        numero1 !== numero2 &&
        (numero1 === "azul" || numero1 === "rojo") && 
        (numero2 === "azul" || numero2 === "rojo")
    ) {
        console.log("morado\n")
    } else if (
        numero1 !== numero2 &&
        (numero1 === "rojo" || numero1 === "amarillo") && 
        (numero2 === "rojo" || numero2 === "amarillo")
    ) {
        console.log("naranja\n")
    } else {
        console.log("La combinacion dada de colores no esta disponible\n")
    }
}

function determinarResultadoDeCombinacion(readlineIns, menu) {
    console.log("Determina cual es el resultado de combinar 2 colores ")
    readlineIns.question("color 1: ", (numero1) => {
        readlineIns.question("color 2: ", (numero2) => {
            combinarColores(numero1, numero2)
            menu()
        })
    })
}

module.exports = {determinarResultadoDeCombinacion}