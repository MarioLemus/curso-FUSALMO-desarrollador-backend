const fs = require('fs')

const ruta = `${process.cwd()}/nuevaRuta/test.txt`
console.log(ruta)

fs.readFile(ruta, 'utf8', (err, data) => {
    if (err) console.error('Error al leer el archivo', err)
    else console.log('contenido del archivo:', data)
})

/*

const filePath = 'archivo.txt'
const contenidoAgregado = 'texto extra'

fs.appendFile(filePath, contenidoAgregado, (err) => {
    if (err) console.log('Error al agregar el contenido')
    else console.log('Contenido agregado')
})
*/

/*
const contenido = 'Este es el nuevo contenido'
fs.writeFile('archivo.txt', contenido, err => {
    if (err) console.log('Error al escribir el archivo')
    else console.log('El archivo se escribio')
})
*/

/*
fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) console.error('Error al leer el archivo', err)
    else console.log('contenido del archivo:', data)
})
*/