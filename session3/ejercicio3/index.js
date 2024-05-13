function factorial(readlineIns) {
    readlineIns.question("Digite el numero a realizar el factorial: ", (n1) => {
        let resultado = 1
        for (let i = 1; i <= parseFloat(n1); i++) {
            resultado *= i
        }
        console.log(resultado)
        readlineIns.close()
    })
}


module.exports = factorial