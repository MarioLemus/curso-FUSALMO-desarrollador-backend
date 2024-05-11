const personas =  [
    {
        nombre: 'Sergio',
        edad: 33, 
        ciudad: 'San Salvador'
    },
    {
        nombre: 'Marta',
        edad: 35, 
        ciudad: 'San Salvador'
    },
    {
        nombre: 'Marlenie',
        edad: 50, 
        ciudad: 'Santa Tecla'
    },
    {
        nombre: 'Sonia',
        edad: 25, 
        ciudad: 'San Miguel'
    },
]

function filtrarPersonas(personas, ciudad) {
    return personas.filter(persona => persona.edad > 30 && persona.ciudad === ciudad)
}

let personasFiltradas = filtrarPersonas(personas, "San Salvador")
console.log(personasFiltradas)