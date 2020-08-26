require('dotenv').config()

const config = {
    dev: process.env.NODE_ENV !== 'production',
    key_openWeather: process.env.KEY_OPENWEATHER
}

module.exports = { config };