const axios = require('axios');

class IpApiService {
    constructor() {}

    async getLocation(ip) {
        // const mip = '181.28.65.11'

        try {
            const response = await axios.get(`https://ipapi.co/${mip}/json/`);
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error)
        }
        
    }

}

module.exports = IpApiService