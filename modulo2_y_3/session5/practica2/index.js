import inquirer from 'inquirer'

inquirer.prompt([
    {
        type: 'checkbox',
        name: 'frutas',
        message: 'Selecciona tus trutas favoritas',
        choices: ['Manzana', 'Banana', 'Uvas', 'Naranja']
    }
])
.then(respuesta => {
    if (respuesta.frutas.join(', ').toLowerCase() === ('manzana, banana' || 'banana, manzana')) {
        console.log('Licuado fresco')
    } else if(respuesta.frutas.join(', ').toLowerCase() === ('manzana, naranja' || 'naranja, manzana')) {
        console.log('Licuado acido')
    } else if(respuesta.frutas.join(', ').toLowerCase() === ('banana, naranja' || 'naranja, banana')) {
        console.log('Licuado jumex')
    } else {
        console.log('No hay de ese amor!')
    }
})