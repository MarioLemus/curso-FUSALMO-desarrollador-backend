import inquirer from 'inquirer'

const pregunta = [
    {
        type: 'input',
        name: 'correo',
        message: 'Introduce tu correo',
        validate: function(value) {
            const validacion = value.match(
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            )
            if (validacion) {
                return true
            }
            return 'Porfavor introduce un correo valido'
        }
    }
]

inquirer.prompt(pregunta)
.then(resp => {
    console.log(`Correo ingresado: ${resp.correo}`)
})
.catch(error => {
    console.log('Error al ingresar el correo', error)
})