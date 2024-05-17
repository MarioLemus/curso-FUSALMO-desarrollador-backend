function saludar(nombre, cb) {
    const saludo = `Hola, ${nombre}`
    cb(saludo)
}

function mostrar(saludo) {
    console.log(saludo)
}

saludar("William", mostrar)