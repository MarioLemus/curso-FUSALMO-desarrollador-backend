const axios = require('axios')
const yargs = require('yargs')

const argv = yargs
.option('address', {
    alias: 'a',
    description: 'Direccion para encontrar',
    type: 'string',
    demandOption: true
})
.help()
.alias('help', 'h')
.argv;

const accessToken='pk.eyJ1Ijoid2lsbGl3b25rYSIsImEiOiJjbHdyYnVhMDIwOGd5MmlvZ3lsZnRsbTg0In0.bSSPmW9wZJj0mqVX6z3Wsg'

async function geocode(address) {
    try {
        const res = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json', {
            params: {
                access_token: accessToken
            }
        })

        if (res.data.features.length > 0) {
            const location = res.data.features[0]
            console.log('Direccion: ', location.place_name)
            console.log('Coordenadas: ', location.geometry.coordinates)
        } else {
            console.log('No se eoncontro la direccion')
        }
    } catch (error) {
        console.log('Error al obtener la ubicacion: ', error)
    }
}

const address = argv.address
geocode(address)