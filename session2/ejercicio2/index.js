const productoA = {
    nombre: "camisa",
    precio: 25,
    cantidad: 5
}

const productoB = {
    nombre: "jeans",
    precio: 40,
    cantidad: 3
}

let costoTotalProductosA = productoA.precio * productoA.cantidad 
let costoTotalProductosB = productoB.precio * productoB.cantidad 
let costoTotal = costoTotalProductosA + costoTotalProductosB

console.log(costoTotalProductosA)
console.log(costoTotalProductosB)
console.log(`Costo Total: ${costoTotal}`)