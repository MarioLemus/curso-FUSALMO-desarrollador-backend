import fs from 'fs';
import chalk from 'chalk';
 
const cargarNotas = () => {
    try {
        const dataBuffer = fs.readFileSync('notas.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
};
 
const guardarNotas = (notas) => {
    const dataJSON = JSON.stringify(notas);
    fs.writeFileSync('notas.json', dataJSON);
};
 
const agregarNota = (title, body, menu) => {
    const notas = cargarNotas();
    const duplicateNote = notas.find((note) => note.title === title );
 
    if (!duplicateNote) {
        notas.push({ title, body });
        guardarNotas(notas);
        console.log(chalk.green.inverse('\nNota agregada'));
    } else {
        console.log(chalk.red.inverse('\nNota no agregada. Ya existe una nota con ese título'));
    }
};
 
const eliminarNota = (title) => {
    const notas = cargarNotas();
    const notasToKeep = notas.filter((note) => note.title !== title);
 
    if (notas.length > notasToKeep.length) {
        guardarNotas(notasToKeep);
        console.log(chalk.green.inverse('\nNota eliminada'));
    } else {
        console.log(chalk.red.inverse('\nNo se encontró una nota con ese título'));
    }
};
 
const listarNotas = () => {
    const notas = cargarNotas();
    if (notas.length === 0) {
        console.log(chalk.red.inverse(`\n> Notas ${notas.length} `))
    } else {
        console.log(chalk.green.inverse('\nTus notas:\n'));
        notas.forEach((note) => {
            console.log(chalk.white.inverse(`\n> Titulo: ${note.title} `))
            console.log(chalk.white.inverse(`> Cuerpo: ${note.body} `) + '\n')
        });
    }
};

const editarNota = (currentTitle, newTitle, newBody) => {
    const notas = cargarNotas();
    const duplicateNote = notas.find((note) => note.title === currentTitle );
    const modifiedNotes = notas.filter((note) => note.title !== currentTitle );
 
    if (duplicateNote) {
        modifiedNotes.push(
            { 
                title:newTitle ? newTitle : duplicateNote.title, 
                body:newBody ? newBody: duplicateNote.body
            }
        );
        guardarNotas(modifiedNotes);
        console.log(chalk.green.inverse('\nNota modificada'));
    } else {
        console.log(chalk.red.inverse('\nNota no existente'));
    }
};
 
 
const leerNota = (title) => {
    const notas = cargarNotas();
    const note = notas.find((note) => note.title === title);
       
    if (note) {
        console.log(chalk.white.inverse(`\n> Titulo: ${note.title} `));
        console.log(chalk.white.inverse(`> Cuerpo: ${note.body} `));
    } else {
        console.log(chalk.red.inverse('\nNo se encontró una nota con ese título'));
    }
};
 
export {
    agregarNota,
    eliminarNota,
    listarNotas,
    leerNota,
    editarNota
};
