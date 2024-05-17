function verificarPropsEnObjeto(obj) {
    const propsEsperadas = ["nombre", "direccion", "telefono"].sort()
    const propsActuales = Object.keys(obj).sort()
    return JSON.stringify(propsEsperadas) === JSON.stringify(propsActuales)
}

const persona = {
    nombre: "Carmel", direccion: "San Salvador", telefono: 25252525
}


console.log(verificarPropsEnObjeto(persona))