const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const rutaProductos = require('./rutas/productos')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
const port = 3000
app.use(bodyParser.json())
const mongoURI = process.env.CONNECTION_URI

mongoose.connect(mongoURI)
.then(()=> console.log('MongoDB conectado'))
.catch(err => console.log(err))

app.use('/api/producto', rutaProductos)

app.listen(port, () => console.log(`App running on port ${port}!`))