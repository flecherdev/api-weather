require('dotenv').config()

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT,
    key_openWeather: process.env.KEY_OPENWEATHER,
    sentryDns: process.env.SENTRY_DNS,
    sentryId: process.env.SENTRY_ID
}

module.exports = {  config };

