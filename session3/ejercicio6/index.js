function identificarMesPorSuNumero(readlineIns, menu) {
    readlineIns.question("Ingrese el numero de mes: ", (numeroMes) => {
        let nombreDeMes = ""
        switch(parseInt(numeroMes)) {
            case 1:
                nombreDeMes = "Enero"
                break;
            case 2:
                nombreDeMes = "Febrero"
                break;
            case 3:
                nombreDeMes = "Marzo"
                break;
            case 4:
                nombreDeMes = "Abril"
                break;
            case 5:
                nombreDeMes = "Mayo"
                break;
            case 6:
                nombreDeMes = "Junio"
                break;
            case 7:
                nombreDeMes = "Julio"
                break;
            case 8:
                nombreDeMes = "Agosto"
                break;
            case 9:
                nombreDeMes = "Septiembre"
                break;
            case 10:
                nombreDeMes = "Octubre"
                break;
            case 11:
                nombreDeMes = "Noviembre"
                break;
            case 12:
                nombreDeMes = "Diciembre"
                break;
            default:
                nombreDeMes = "El numero ingresado es invalido"
        }
        console.log(nombreDeMes + '\n') 
        menu()
    })
}

module.exports = identificarMesPorSuNumero