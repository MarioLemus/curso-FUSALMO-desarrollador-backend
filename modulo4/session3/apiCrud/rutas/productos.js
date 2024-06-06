const express = require('express')
const rutas = express.Router()
const Producto  = require('../modelos/productos.js')

rutas.get('/', async(req, res) => {
    try {
        const productos = await Producto.find()
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

rutas.get('/:id', async(req, res) => {
    const { id } = req.params
    try {
        const productos = await Producto.findById(id)
        if (!productos) {
            res.status(404).json({error: 'Producto no enontrado'})
        } else {
            res.status(200).json(productos)
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

rutas.post('/', async function (req, res) {
    const  {producto, categoria, existencia, precio} = req.body
    try {
        const nuevoProducto = Producto({producto, categoria, existencia, precio})
        await nuevoProducto.save()
        res.status(201).json(nuevoProducto)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

rutas.put('/:id', async function(req, res) {
    const { id } = req.params;
    const { producto, categoria, existencia, precio } = req.body;
    try {
        const productos = await Producto.findById(id)
        if (!productos) {
            return res.status(404).json({error:'Producto no encontrado'})
        } else {
            productos.producto = producto || productos.producto
            productos.categoria = categoria || productos.categoria
            productos.existencia = existencia || productos.existencia
            productos.precio = precio || productos.precio

            await productos.save()
            res.status(200).json(productos)
        }    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
});

rutas.delete('/:id', async function(req, res) {
    const { id } = req.params;

    try {
        const productos = await Producto.findByIdAndDelete(id)
        if (!productos) {
            return res.status(404).json({error: 'Producto no encontrado'})
        } else {
            res.status(200).json({message: 'Producto eliminado'})
        }
    } catch (error) {
        res.status(500).json({error: error.message})        
    }
});

module.exports = rutas