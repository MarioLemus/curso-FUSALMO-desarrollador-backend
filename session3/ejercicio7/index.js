function seleccionarCategoriaVehiculo(readlineIns, menu) {
    readlineIns.question("Digite la categoria del vehiculo: ", (categoria) => {
        let tipovehiculo = ""
        switch(categoria.toLowerCase()) {
            case 'moto':
                tipovehiculo = "Motocicleta"
                break
            case 'auto':
                tipovehiculo = 'Automovil'
                break
            case 'camion':
                tipovehiculo = 'Super camion'
                break
            case 'bicicleta':
                tipovehiculo = 'Super Bicicleta'
                break
            default:
                tipovehiculo = "La categoria digitada no existe"
                break
        }
        console.log(tipovehiculo + '\n')
        menu()
    })
}

module.exports = seleccionarCategoriaVehiculo