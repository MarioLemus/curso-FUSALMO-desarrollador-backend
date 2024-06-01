const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('El server esta funcionando, esta es una actualizacion al contenedor intento 4 yeah')
})

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en: http://localhost:${PORT}`)
})