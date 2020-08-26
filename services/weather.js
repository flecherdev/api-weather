//importar axios
const  IpApiService  = require('./ipapi')
const { config } = require('../config')
const axios = require('axios');
 
class WeatherService {

    constructor() {
        this.ipApiService = new IpApiService()
    }

    async getLocation(ip) {
        const responseIpApi = await this.ipApiService.getLocation(ip)
        console.log(responseIpApi)
        const response = await axios.get(`
        https://api.openweathermap.org/data/2.5/weather?q=${responseIpApi.city}&appid=${config.key_openWeather}`);


        // console.log(response)
        return Promise.resolve(response.data)
    }

    getCurrent(city) {
        const data = 'viene de servicios'
        return Promise.resolve(data)
    }

    getForecast(city) {
        // api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=5
        const data = 'viene de servicios 5 dias'
        return Promise.resolve(data)
    }

}

module.exports = WeatherService