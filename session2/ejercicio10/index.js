const estudiantes = [
    {
        nombre: "Carlos",
        edad: 15
    },
    {
        nombre: "Maria",
        edad: 16
    },
    {
        nombre: "Lucia",
        edad: 13
    },
]

const profesores = [
    {
        nombre: "Lucio",
        edad: 55
    },
    {
        nombre: "Minerva",
        edad: 45
    },
]

const comunidadEducativa = [...estudiantes, ...profesores]
console.log(comunidadEducativa)