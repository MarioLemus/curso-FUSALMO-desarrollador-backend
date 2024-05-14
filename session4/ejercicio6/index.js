function paso1 () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5)
            console.log("paso 1 funcionando")
        }, 5000);
    })
}

function paso2 (num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2)
            console.log("paso 2 funcionando")
        }, 5000);
    })
}


function paso3 (num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num + 2)
            console.log("paso 3 funcionando")
        }, 5000);
    })
}

paso1()
.then(paso2)
.then(paso3)
.then(resultado => console.log(`resultado final es: ${resultado}`))
