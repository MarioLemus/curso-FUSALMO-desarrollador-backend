import inquirer from 'inquirer'

const pregunta = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Digame su nombre'
    },
    {
        type: 'confirm',
        name: 'confirmacion',
        message: 'Seguro ese es el nombre?'
    },
    {
        type: 'list',
        name: 'color',
        message: 'Cual es tu color favorito?',
        choices: ['rojo', 'verde', 'azul', 'amarillo']
    },
    {
        type: 'checkbox',
        name: 'intereses',
        message: 'Selecciona una opcion de intereses',
        choices: ['programacion', 'diseño', 'bases de datos', 'redes']
    },
    {
        type: 'password',
        name: 'contraseña',
        message: 'Ingrese su contraseña',
        mask: '(!)'
    }
]

inquirer.prompt(pregunta).then((respuesta) => {
    if (respuesta.confirmacion) {
        console.log(`Hola ${respuesta.nombre}`)
        console.log('Confirmacion exitosa')
        console.log(`Tu color favorito es: ${respuesta.color}`)
        console.log(`Tu intereses son: ${respuesta.intereses.join(', ')}`)
        console.log(`Tu contraseña es: ${respuesta.contraseña}`)
    } else {
        console.log('No se confirmo el nombre')
    }
})