const express = require('express')
const app = express()
const PORT = 3000


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})
app.use(express.json())

app.get('/ejemplo', (req, res) => res.send('Hola mundo!'))

app.post('/ejemplo', (req, res) => {
  res.send(`Datos recibidos: ${JSON.stringify(req.body)}`)
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Algo salio mal!')
});


app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))