const listaDeCompras = {
    productos: ["Corn flakes", "Leche", "Carne molida", "Nachos", "Pastel", "Avon"],
    cantidades: [1, 1, 3, 2]
}

const listaLegible = listaDeCompras.productos.map((producto, i) => {
    return [
        producto, 
        listaDeCompras.cantidades[i] ? `Cantidad: ${listaDeCompras.cantidades[i]}` : "Cantidad indefinida"
    ]
})

console.log(listaLegible)