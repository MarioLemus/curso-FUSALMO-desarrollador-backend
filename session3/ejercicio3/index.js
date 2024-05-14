function factorial(readlineIns, menu) {
    readlineIns.question("Digite el numero a realizar el factorial: ", (n1) => {
        let resultado = 1
        for (let i = 1; i <= parseFloat(n1); i++) {
            resultado *= i
        }
        console.log(resultado + '\n')
        menu()
    })
}


module.exports = factorial