function seleccionarCategoriaVehiculo(readlineIns) {
    readlineIns.question("Digite la categoria del vehiculo: ", (categoria) => {
        let tipovehiculo = ""
        switch(categoria) {
            case 'Moto':
                tipovehiculo = "Motocicleta"
                break
            case 'Auto':
                tipovehiculo = 'Automovil'
                break
            case 'Camion':
                tipovehiculo = 'Super camion'
                break
            case 'Bicicleta':
                tipovehiculo = 'Super Bicicleta'
                break
            default:
                tipovehiculo = "La categoria digitada no existe"
                break
        }
        console.log(tipovehiculo)
        readlineIns.close()
    })
}

module.exports = seleccionarCategoriaVehiculo