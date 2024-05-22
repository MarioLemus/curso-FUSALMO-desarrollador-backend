
const fs = require('fs')
const path = require('path')
const readline = require('readline')

const documentos = path.join(process.cwd(), '/rutaAlternaArchivos')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question('Nombre de la carpeta a eliminar: ', (carpeta) => {
    const carpetaDel = path.join(documentos, carpeta)
    fs.rm(carpetaDel, {recursive:true}, (err) => {
        if (err) console.log('La carpeta no se pudo eliminar')
        else console.log('carpeta se elimino exitosamente')
    })
})