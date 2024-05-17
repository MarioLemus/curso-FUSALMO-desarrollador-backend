const express = require('express')

const app = express()
const PORT = 7070

app.get('/', (req, res) => {
    res.send('Este es un servidor basico usando express')
})

// este ejecicio se ejecuta a traves de: node index.js
app.listen(PORT, () => {
    console.log(`App corriendo en el puerto: ${PORT}`)
})