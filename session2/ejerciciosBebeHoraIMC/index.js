class Bebe {
    constructor(nombre, edadMeses) {
        this.nombre = nombre
        this.edadMeses = edadMeses
    }

    llorar() {
        console.log(`${this.nombre} de ${this.edadMeses} meses esta llorando`)
    }
    
    dormir() {
        console.log(`${this.nombre} de ${this.edadMeses} meses esta durmiendo en la hamaca`)
    }
    
    comer() {
        console.log(`${this.nombre} de ${this.edadMeses} meses esta comiendo su cereal`)
    }
}

const bebe1 = new Bebe("Antonio", 3)
const bebe2 = new Bebe("Sonia", 5)
const bebe3 = new Bebe("Javier", 8)

bebe1.llorar()
bebe1.dormir()
bebe1.comer

bebe2.llorar()
bebe2.dormir()
bebe2.comer

bebe3.llorar()
bebe3.dormir()
bebe3.comer()


class Tiempo {
    constructor() {
        this.hora = new Date().getHours()
        this.minutos = new Date().getMinutes()
        this.segundos = new Date().getSeconds()
    }

    obtenerHoraActual() {
        console.log(`La hora actual es: ${this.hora}:${this.minutos}:${this.segundos}`)
    }
}

const tiempo = new Tiempo()
//tiempo.obtenerHoraActual()


class Persona {
    constructor(peso, altura) {
        this.peso = peso
        this.altura = altura
    }

    calcularIMC = () => console.log((this.peso/this.altura**2).toFixed(2))
}    

const persona = new Persona(420, 1.50)
// persona.calcularIMC()

// Doki theme