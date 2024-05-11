function verificarPropsEnObjeto(obj) {
    const propsEsperadas = ["nombre", "edad", "ciudad"].sort()
    const propsActuales = Object.keys(obj).sort()
    return JSON.stringify(propsEsperadas) === JSON.stringify(propsActuales)
}

const persona = {
    nombre: "Isaac",
    ciudxad: "ilobasco", 
    edad: 25
}

verificarPropsEnObjeto(persona)