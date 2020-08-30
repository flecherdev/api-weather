const assert = require('assert')
const proxyquire = require('proxyquire')

// mocks
const { locationMock, WeatherServiceLocationMock } = require('../utils/mocks/location')
const { currentMock, WeatherServiceCurrentMock } = require('../utils/mocks/current')
const { forecastMock, WeatherServiceForecastMock } = require('../utils/mocks/forecast')

// server test
const testServer = require('../utils/testServer')

// test location
describe("routes - v1 - location", function(){
    //proxyquire
    const route = proxyquire("../routes/api/weather", {
        '../../services/weather': WeatherServiceLocationMock
    })

    const request = testServer(route)

    describe('GET /location', function(){
        it('should respond with status 200', function(done){
            request.get('/v1/location').expect(200, done)
        })

        it('should respond with content type json', function(done){
            request.get('/v1/location').expect('Content-type',/json/, done)
        })

        it('should respond with not error', function(done) {
            request.get("/v1/location").end((err, res) => {
              assert.strictEqual(err, null)
              done()
            })
        })

        it('should respond with the object of location', function(done){
            request.get('/v1/location').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: locationMock,
                    message: 'location'
                })
                done()
            })
        })
     
    })
})

// test current
describe("routes - v1 - current", function(){
    //proxyquire
    const route = proxyquire("../routes/api/weather", {
        '../../services/weather': WeatherServiceCurrentMock
    })

    const request = testServer(route)

    describe('GET /current', function(){
        it('should respond with status 200', function(done){
            request.get('/v1/current').expect(200, done)
        })

        it('should respond with content type json', function(done){
            request.get('/v1/current').expect('Content-type',/json/, done)
        })

        it('should respond with not error', function(done) {
            request.get("/v1/current").end((err, res) => {
              assert.strictEqual(err, null)
              done()
            })
        })

        it('should respond with the object of current', function(done){
            request.get('/v1/current').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: currentMock,
                    message: 'current'
                })
                done()
            })
        })
     
    })
})

// test forecast
describe("routes - v1 - forecast", function(){
    //proxyquire
    const route = proxyquire("../routes/api/weather", {
        '../../services/weather': WeatherServiceForecastMock
    })

    const request = testServer(route)

    describe('GET /forecast', function(){
        it('should respond with status 200', function(done){
            request.get('/v1/forecast').expect(200, done)
        })

        it('should respond with content type json', function(done){
            request.get('/v1/forecast').expect('Content-type',/json/, done)
        })

        it('should respond with not error', function(done) {
            request.get("/v1/forecast").end((err, res) => {
              assert.strictEqual(err, null)
              done()
            })
        })

        it('should respond with the object of forecast', function(done){
            request.get('/v1/forecast').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: forecastMock,
                    message: 'forecast'
                })
                done()
            })
        })
        
    })
})