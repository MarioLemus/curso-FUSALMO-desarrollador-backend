function operacionAsincrona (callback) {
    setTimeout(() => {
       callback('Operacion asincrona completada') 
    }, 8000)
}

operacionAsincrona((mensaje) => {
    console.log(mensaje)
})