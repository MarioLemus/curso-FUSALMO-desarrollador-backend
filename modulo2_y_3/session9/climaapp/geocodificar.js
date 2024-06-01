const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()


const geocodificar = async (ubicacion) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(ubicacion)}.json?access_token=${process.env.MAPBOX_TOKEN}`
    try {
        const res = await axios.get(url)
        if (res.data.features.length === 0) {
            throw new Error('Ubicacion no encontrada')
        }
        const [longitud, latitud] = res.data.features[0].geometry.coordinates
        return {latitud, longitud}
    } catch (error) {
        throw new Error('No se puede concetar al servicio')
    }
}

module.exports = geocodificar