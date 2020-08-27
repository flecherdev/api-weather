const axios = require('axios');

class IpApiService {
    constructor() {}

    async getLocation(ip) {
        try {
            const response = await axios.get(`https://ipapi.co/${ip}/json/`);
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = IpApiService