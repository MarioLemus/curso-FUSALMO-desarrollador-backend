const evaluarSignoNumero = require('../ejercicio1');
const compararNumeros = require('../ejercicio2');
const factorial = require('../ejercicio3');
const determinarSiEsPar = require('../ejercicio4');
const determinarResultadoDeCombinacion = require('../ejercicio5');
const identificarMesPorSuNumero = require('../ejercicio6');
const seleccionarCategoriaVehiculo = require('../ejercicio7');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function ejecutarMenu() {
    console.log("Ejercicio (1)");
    console.log("Ejercicio (2)");
    console.log("Ejercicio (3)");
    console.log("Ejercicio (4)");
    console.log("Ejercicio (5)");
    console.log("Ejercicio (6)");
    console.log("Ejercicio (7)");
    console.log("Presione cualquier otra tecla para finalizar");

    rl.question("Seleccione un ejercicio: ", (resp) => {
        const opcion = parseInt(resp);
        if (Number.isNaN(opcion)) {
            return false;
        }

        switch (opcion) {
            case 1:
                evaluarSignoNumero(rl);
                break;
            case 2:
                compararNumeros(rl);
                break;
            case 3:
                factorial(rl);
                break;
            case 4:
                determinarSiEsPar(rl);
                break;
            case 5:
                determinarResultadoDeCombinacion(rl);
                break;
            case 6:
                identificarMesPorSuNumero(rl);
                break;
            case 7:
                seleccionarCategoriaVehiculo(rl);
                break;
            default:
                return false;
        }
    });
    return true
}

ejecutarMenu()

module.exports = ejecutarMenu
