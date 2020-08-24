const express = require('express')
const router = express.Router()

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


router.get('/location', function(req, resp){
    const data = "informacion de location"
    req.status(200).json({
        data: data,
        message: 'location ip-api'
    })
})

router.get('/current/:city', function(req, resp){
    const { city } = req.params
    const data = "informacion current"
    req.status(200).json({
        data: data,
        message: 'current ip-api'
    })
})

router.get('/forecast/:city', function(req, resp){

    const data = "informacion de forecast"
    req.status(200).json({
        data: data,
        message: 'forecast ip-api'
    })
})

module.exports = router