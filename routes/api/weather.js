const express = require('express')
const router = express.Router()
const WeatherService  = require('../../services/weather')
const weather = new WeatherService()
const publicIp = require('public-ip');

/** 
 * 
 * /location  -> Devuelve los datos de ubicación city según ip-api.
 * 
 
 * /current[/city]  ->  City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
                        ip-api y el estado del tiempo actual.
 * 
   / forecast[/city]  ->  City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
                          ip-api y el estado del tiempo a 5 días
 * 
 */

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

module.exports = router