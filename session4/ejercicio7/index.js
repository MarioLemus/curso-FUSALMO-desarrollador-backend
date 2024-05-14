function dividir(a, b, callback) {
    if (b === 0) {
        callback('Error: el divisor es cero')
    }
    else {
        let resultado = a/b
        callback(null, resultado)
    }
}

dividir(10, 5, (error, resultado) => {
    if (error) {
        console.log(console.error(error))
    } else {
        console.log(`El resultado es: ${resultado}`)
    }
})