function retrasarPromesa(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`La promesa se ha resuelto en ${ms} milisegundos`)
        }, ms);
    })
}

retrasarPromesa(2000)
.then(mensaje => {
    console.log(mensaje)
})