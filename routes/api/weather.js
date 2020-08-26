const express = require('express')
const router = express.Router()
const WeatherService  = require('../../services/weather')
const weather = new WeatherService()

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
    var ip = req.ip['x-forwarded-for'] || req.connection.remoteAddress;

    try {
        const response = await weather.getLocation(ip)
        res.status(200).json({
            data: response,
            message: 'location ip-api'
        })
    } catch (error) {
        next(error)
    }

})

router.get('/current/:city?', function(req, res){
    const { city } = req.params
    console.log(city)
    const data = "informacion current"
    res.status(200).json({
        data: data,
        city: city,
        message: 'current ip-api'
    })
})

router.get('/forecast/:city?', function(req, res){
    const { city } = req.params
    console.log(city)
    const data = "informacion de forecast"
    res.status(200).json({
        data: data,
        message: 'forecast ip-api'
    })
})

module.exports = router