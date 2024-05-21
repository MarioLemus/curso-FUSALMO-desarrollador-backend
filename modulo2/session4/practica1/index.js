import {suma, resta} from './funciones.js'

const resultadoSuma = suma(10, 2)
const resultadoResta = resta(8, 1)

console.log(`Resultado suma: ${resultadoSuma}`)
console.log(`Resultado resta: ${resultadoResta}`)


/*
const fs = require('node:fs')

const hoy = new Date()
const formateo = formatoFecha(hoy)

fs.writeFileSync('fecha.text', `La fecha de hoy es ${formateo}`)

console.log('La fecha se ha guardado')
const {agregar, restar, Persona} = require('./funciones')


const resultado = agregar(5, 3)
const residuo = restar(5, 2)
const persona1 = new Persona('Antonio', 35)

persona1.saludo()

console.log(`EL resultado de la suma es: ${resultado}`)
console.log(`EL resultado de la resta es: ${residuo}`)
*/