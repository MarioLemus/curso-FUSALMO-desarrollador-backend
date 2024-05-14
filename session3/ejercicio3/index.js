function calcFactorial(n) {
    let resultado = 1
    for (let i = 1; i <= parseFloat(n); i++) {
        resultado *= i
    }
    return resultado
}

function obtenerFactorial(readlineIns, menu) {
    readlineIns.question("Digite el numero a realizar el factorial: ", (n1) => {
        console.log(calcFactorial(n1) + '\n')
        menu()
    })
}


module.exports = {obtenerFactorial}