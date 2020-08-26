const axios = require('axios');

class IpApiService {
    constructor() {}

    async getLocation(ip) {
        const mip = '181.28.65.11'

        try {
            const response = await axios.get(`https://ipapi.co/${mip}/json/`);
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
        }
        
    }

    getCurrent(city) {
        const data = 'viene de servicios'
        return Promise.resolve(data)
    }

    getForecast(ip, city) {
        const data = 'viene de servicios'
        return Promise.resolve(data)
    }

}

module.exports = IpApiService