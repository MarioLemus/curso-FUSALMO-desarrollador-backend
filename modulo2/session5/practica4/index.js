import inquirer from "inquirer"
import fs from 'node:fs'
import path from 'node:path'

function obtenerCredsDB() {
    try {
        const ruta = path.join(process.cwd(), 'creds.json')
        const dataBuffer = fs.readFileSync(ruta);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
};
 
function guardarCredsDB(creds) {
    const credsDB = obtenerCredsDB().filter(e => e.correo === creds.correo)
    if (credsDB.length > 0) {
        console.log('El usuario ya existe')
        return
    }
    const dataJSON = JSON.stringify([...obtenerCredsDB(),creds]);
    fs.writeFileSync('creds.json', dataJSON);
    console.log('Credenciales guardadas exitosamente')
};

function login(creds) {
    if (typeof creds === 'object') {
        const credsDB = obtenerCredsDB().filter(e => e.correo === creds.correo && e.contraseña === creds.contraseña)
        return credsDB
    }
}

function signup(creds) {
    if (typeof creds === 'object') {
        guardarCredsDB(creds)
    }
}

inquirer.prompt([
    {
        type:'input',
        name: 'nombre',
        message: 'Introduce tu nombre: ',
    }, 
    {
        type:'input',
        name: 'edad',
        message: 'Introduce tu edad: ',
        validate: function(val) {
            if (val < 18) return 'Solo se admiten mayores de edad'
            else return true
        }
    },
    {
        type:'input',
        name: 'correo',
        message: 'Introduce tu correo: ',
        validate: function(value) {
            const validacion = value.match(
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            )
            if (validacion) {
                return true
            }
            return 'Porfavor introduce un correo valido'
        }
    },
    {
        type:'password',
        name: 'contraseña',
        message: 'Introduce tu contraseña: ',
        mask: '#'
    }

])
.then(res => {
    const currentCreds = login({
        correo: res.correo,
        contraseña: res.contraseña
    })

    if (currentCreds.length <= 0) {
        signup({
            nombre: res.nombre,
            edad: res.edad,
            correo: res.correo,
            contraseña: res.contraseña
        })
    } else {
        const creds = login({
            correo: res.correo,
            contraseña: res.contraseña
        })

        if (creds.length > 0) {
            console.log(`Usuario: ${creds[0].correo}`)
            console.log(`Contraseña: ${creds[0].contraseña}`)
        } else {
            console.log('Contraseña erronea')
        }

    }
})