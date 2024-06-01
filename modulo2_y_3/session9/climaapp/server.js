const express = require('express')
const dotenv = require('dotenv')
const geocodificar = require('./geocodificar.js')
const obtenerClima = require('./obtenerClima.js')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/clima', async (req, res) => {
    const ubicacion = req.body.ubicacion
    try {
        const {latitud, longitud} = await geocodificar(ubicacion)
        const clima = await obtenerClima(latitud, longitud)
        res.json({...clima, latitud, longitud})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
})


app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`)
})