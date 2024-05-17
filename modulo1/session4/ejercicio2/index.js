function multiplicarPromise (a, b) {
    return new Promise((resolve, reject) => {
        const resultado =  a * b
        if (isNaN(resultado)) {
            reject('Error no hay argumentos validos')
        } else {
            resolve(resultado)
        }
    })
}


multiplicarPromise(2)
.then(resultado => console.log(resultado))
.catch(error => {
    console.log(error)
})