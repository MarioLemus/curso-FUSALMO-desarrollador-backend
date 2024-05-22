import inquirer from 'inquirer'

const pregunta = [
    {
        type: 'input',
        name: 'correo',
        message: 'Introduce tu correo',
        validate: function() {
            const validacion = value.match(
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            )
            if (validacion) {
                return true
            }
            return 'Porfavor introuce un correo valido'
        }
    }
]