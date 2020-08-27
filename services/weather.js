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

        return Promise.resolve(response.data)
    }

    async getCurrent(ip, city) {
        
        if(!city) {
            console.log('ciudad vacia busco por ip')
            const responseIpApi = await this.ipApiService.getLocation(ip)
            const response = await axios.get(`
                https://api.openweathermap.org/data/2.5/weather?q=${responseIpApi.city}&appid=${config.key_openWeather}`
            );
            return Promise.resolve(response.data)
        } else {
            console.log('busco por ciudad')
            const response = await axios.get(`
                https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.key_openWeather}`
            );
            return Promise.resolve(response.data)
        }
        
    }

    async getForecast(ip, city) {
        const cnt = 5
        if(!city) {
            console.log('ciudad vacia busco por ip')
            const responseIpApi = await this.ipApiService.getLocation(ip)
            const response = await axios.get(`
                http://api.openweathermap.org/data/2.5/forecast?q=${responseIpApi.city}&mode=json&units=metric&cnt=${cnt}&appid=${config.key_openWeather}`
            );
            return Promise.resolve(response.data)
        } else {
            console.log('busco por ciudad')
            const response = await axios.get(`
            http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&units=metric&cnt=${cnt}&appid=${config.key_openWeather}`
            );
            return Promise.resolve(response.data)
        }
    }

}

module.exports = WeatherService