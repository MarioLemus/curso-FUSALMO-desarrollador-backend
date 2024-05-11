const personas = [
    {
        nombre: "Carlos",
        edad: 75
    },
    {
        nombre: "Karla",
        edad: 15
    },
    {
        nombre: "Ramon",
        edad: 55
    },
    {
        nombre: "Mariya",
        edad: 35
    },
]

const arrayOrdenado = personas.sort((a, b) => a.edad - b.edad)

console.log(arrayOrdenado)