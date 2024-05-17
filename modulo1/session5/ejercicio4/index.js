const express = require('express')

const app = express()
const PORT = 7070

app.get('/', (req, res) => {
    res.send('Este es un servidor basico usando express')
})

// la ejecucion de este ejercicio se hace a traves de 
// un script en package.json. Comando -> server
app.listen(PORT, () => {
    console.log(`App corriendo en el puerto: ${PORT}`)
})