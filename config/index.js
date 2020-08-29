require('dotenv').config()

const config = {
    dev: process.env.NODE_ENV !== 'production',
    key_openWeather: process.env.KEY_OPENWEATHER,
    sentryDns: process.env.SENTRY_DNS,
    sentryId: process.env.SENTRY_ID
}

module.exports = {  config: config };

