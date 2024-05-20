import {agregarNota, eliminarNota, leerNota, listarNotas, editarNota} from './utiles/notas.js' 
import readline from 'readline'
import chalk from 'chalk';
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 

function menu() {
    console.log('\n(1) Agregar notas')
    console.log('(2) Eliminar nota')
    console.log('(3) Ver notas existentes')
    console.log('(4) Buscar una nota')
    console.log('(5) Editar una nota')
    console.log(chalk.yellow.inverse('Toque cualquier otra tecla para salir\n'))
    rl.question('Seleccione una opcion: ', (opcion) => {
        switch (parseInt(opcion)) {
            case 1:
                rl.question('\nTitulo de la nota: ', (titulo) => {
                    rl.question('Cuerpo de la nota: ', (cuerpo) => {
                        agregarNota(titulo, cuerpo)
                        menu()
                    })
                })
                break;
            case 2:
                rl.question('\nTitulo de la nota a eliminar: ', (titulo) => {
                    eliminarNota(titulo)
                    menu()
                })
                break
            case 3:
                listarNotas()
                menu()
                break
            case 4:
                rl.question('\nTitulo de la nota a buscar: ', (titulo) => {
                    leerNota(titulo)
                    menu()
                })
                break
            case 5:
                rl.question('\nTitulo de la nota a editar: ', (titulo) => {
                    console.log(chalk.green.inverse('\nNota actual\n'))
                    leerNota(titulo)
                    rl.question('\nNuevo titulo: ', (newTitulo) => {
                        rl.question('Nuevo cuerpo: ', (newCuerpo) => {
                            editarNota(titulo, newTitulo, newCuerpo)
                            menu()
                        })
                    })
                })
                break
            default:
                console.log(chalk.bgCyan.inverse('\n¡Nos vemos luego!'))
                rl.close()
                break;
        }
    })
}

menu()