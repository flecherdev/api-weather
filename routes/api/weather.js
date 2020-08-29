const express = require('express')
const WeatherService  = require('../../services/weather')
const publicIp = require('public-ip');

function weatherApi (app){
    const router = express.Router()
    const weather = new WeatherService()
    app.use('/v1', router)

    router.get('/location',async function(req, res, next){
        var ip = await publicIp.v4()
    
        try {
            // myUndefinedFunction();
            const response = await weather.getLocation(ip)
            res.status(200).json({
                data: response,
                ip: ip,
                message: 'location'
            })
        } catch (error) {
            next(error)
        }
    
    })
    
    router.get('/current/:city?', async function(req, res, next){
        var ip = await publicIp.v4()
        const { city } = req.params
    
        try {
            const response = await weather.getCurrent(ip, city) 
            res.status(200).json({
                data: response,
                message: 'current'
            })
        } catch (error) {
            next(error)
        }
    })
    
    router.get('/forecast/:city?', async function(req, res, next){
        var ip = await publicIp.v4()
        const { city } = req.params
    
        try {
            const response = await weather.getForecast(ip, city)
            res.status(200).json({
                data: response,
                message: 'current'
            })
        } catch (error) {
            next(error)
        }
    })
}


module.exports = weatherApi