const fs = require('fs')
const path = require('path')
const readline = require('readline')

const documentos = path.join(process.cwd(), '/rutaAlternaArchivos')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Nombre de la carpeta a crear: ', (carpeta) => {
    const nuevacarpeta = path.join(documentos, carpeta)
    fs.mkdir(nuevacarpeta, {recursive:true}, (err) => {
        if (err) console.log('La carpeta no se creo')
        else console.log('carpeta creada exitosamente')
    })
})

