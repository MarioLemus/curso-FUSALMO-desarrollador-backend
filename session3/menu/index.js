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
    console.log("Presione cualquier otra tecla para finalizar\n");

    rl.question("Seleccione un ejercicio: ", (resp) => {
        console.log('')
        const opcion = parseInt(resp);

        switch (opcion) {
            case 1:
                evaluarSignoNumero(rl, ejecutarMenu);
                break;
            case 2:
                compararNumeros(rl, ejecutarMenu);
                break;
            case 3:
                factorial(rl, ejecutarMenu);
                break;
            case 4:
                determinarSiEsPar(rl, ejecutarMenu);
                break;
            case 5:
                determinarResultadoDeCombinacion(rl, ejecutarMenu);
                break;
            case 6:
                identificarMesPorSuNumero(rl, ejecutarMenu);
                break;
            case 7:
                seleccionarCategoriaVehiculo(rl, ejecutarMenu);
                break;
            default:
                console.log("Gracias por participar, ¡hasta la proxima!")
                rl.close()
                break;
        }
    });
}

ejecutarMenu()

