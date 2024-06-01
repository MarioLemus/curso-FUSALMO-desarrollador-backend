const express = require('express')
const axios = require('axios')

const app = express()
const PORT = 4000
const apiTodosUrl = 'https://jsonplaceholder.typicode.com/todos'



// all
app.get('/todos', async (req, res) => {
    try {
        const data = await axios.get(apiTodosUrl)
        res.status(200).json(data.data)
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
})

// id -> return just title
app.get('/todos/:id', async (req, res) => {
    try {
        const data = await axios.get(`${apiTodosUrl}/${req.params.id}`)
        res.status(200).json({title: data.data.title})
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
})

// title -> return all props
app.get('/todos/title/:title', async (req, res) => {
    try {
        const data = await axios.get(apiTodosUrl)
        const result = data.data.find(obj => obj.title === req.params.title)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
})

// return only 5 elems 
app.get('/todos/limit/:number', async(req, res) => {
    const todos = []
    try {
        const data = await axios.get(apiTodosUrl)
        for (let index = 0; (index < parseInt(req.params.number) && index !== data.data.length); index++) {
            todos.push(data.data[index]);
        }
        res.status(200).json(todos)
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
})



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))