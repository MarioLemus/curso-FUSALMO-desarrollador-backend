function multiplicar (a, b, callback) {
    return new Promise((resolve, reject) => {
        const resultado =  a * b
        callback(resultado)
    })
}

multiplicar(6, 3, (resultado) => {
    console.log(`Resultado: ${resultado}`)
})