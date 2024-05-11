const personas = [
    {
        nombre: "Sergio",
        edad: 33,
        genero: "M",
    },
    {
        nombre: "Marta",
        edad: 33,
        genero: "F",
    },
]

function buscarPorNombre (personas, nombre) {
    return personas.find(persona => persona.nombre === nombre)
}

console.log(buscarPorNombre(personas, "Fidel"))