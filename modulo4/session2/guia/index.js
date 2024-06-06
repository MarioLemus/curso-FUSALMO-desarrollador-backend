const express = require('express')
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 3000
const DB = []

app.use(express.json())

app.use(function (req, res, next) {
    console.log(req.method)
    if (req.method === 'POST' && (
        !req.body.nombre ||
        !req.body.genero ||
        !req.body.departamento ||
        !req.body.edad
    )) {
        return res.status(400).send({error: 'La informacion entregada no debe contener campos vacios para ser almacenada'})
    }
    next()
})

app.use(function (req, res, next) {
    if (req.method === 'POST' && typeof req.body.edad !== 'number') {
        return res.status(400).send({error: 'La edad debe ser de tipo numerico'})
    }
    next()
})

app.get('/users', (req, res) => {
    res.status(200).json(DB)
})

app.post('/users', function (req, res) {
    const newUser = {
        id: uuidv4(),
        nombre: req.body.nombre,
        edad: req.body.edad,
        genero: req.body.genero,
        departamento: req.body.departamento
    }

    DB.push(newUser)
    res.status(201).send('Usuario creado exitosamente')
})


app.put('/users/:id', function(req, res) {
  const { id } = req.params
  const { nombre, edad, genero, departamento } = req.body
  const indexElm = DB.findIndex(elm => elm.id === id)
  
  if (indexElm !== -1) {
      DB[indexElm].nombre = nombre ? nombre : DB[indexElm].nombre
      DB[indexElm].edad = edad ? edad : DB[indexElm].edad
      DB[indexElm].genero = genero ? genero : DB[indexElm].genero
      DB[indexElm].departamento = departamento ? departamento : DB[indexElm].departamento
      res.status(200).send('Usuario actualizado exitosamente');
    } else {
        res.status(404).send('Elemento no existente, verifique el id proporcionado')
    }

});


app.delete('/users/:id', function(req, res) {
  const { id } = req.params;
  const indexElm = DB.findIndex(elm => elm.id === id)
  if (indexElm !== -1) {
    DB.splice(indexElm, 1)
    res.status(200).send(`Usuario eliminado exitosamente`);
  } else {
    res.status(404).send('Elemento no existente, verifique el id proporcionado')
  }
});

app.listen(port, () => console.log(`App corriendo en el puerto: ${port}!`))