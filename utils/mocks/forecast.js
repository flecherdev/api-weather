const ipApiMock = require('../mocks/ipapi')
const forecastMock = {"cod":"200","message":0,"cnt":5,"list":[{"dt":1598724000,"main":{"temp":23.78,"feels_like":20.56,"temp_min":22.31,"temp_max":23.78,"pressure":996,"sea_level":997,"grnd_level":978,"humidity":67,"temp_kf":1.47},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":81},"wind":{"speed":8.16,"deg":311},"visibility":10000,"pop":0.53,"rain":{"3h":0.29},"sys":{"pod":"d"},"dt_txt":"2020-08-29 18:00:00"},{"dt":1598734800,"main":{"temp":23.13,"feels_like":19.08,"temp_min":22.57,"temp_max":23.13,"pressure":999,"sea_level":1000,"grnd_level":980,"humidity":59,"temp_kf":0.56},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":25},"wind":{"speed":7.92,"deg":302},"visibility":10000,"pop":0.02,"sys":{"pod":"d"},"dt_txt":"2020-08-29 21:00:00"},{"dt":1598745600,"main":{"temp":20.52,"feels_like":16.45,"temp_min":20.2,"temp_max":20.52,"pressure":1002,"sea_level":1002,"grnd_level":982,"humidity":59,"temp_kf":0.32},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":9},"wind":{"speed":6.8,"deg":297},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2020-08-30 00:00:00"},{"dt":1598756400,"main":{"temp":18.29,"feels_like":13.87,"temp_min":18.23,"temp_max":18.29,"pressure":1003,"sea_level":1003,"grnd_level":983,"humidity":63,"temp_kf":0.06},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":9},"wind":{"speed":6.83,"deg":291},"visibility":10000,"pop":0.06,"sys":{"pod":"n"},"dt_txt":"2020-08-30 03:00:00"},{"dt":1598767200,"main":{"temp":17.06,"feels_like":12.98,"temp_min":17.06,"temp_max":17.06,"pressure":1003,"sea_level":1003,"grnd_level":984,"humidity":68,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":6},"wind":{"speed":6.34,"deg":302},"visibility":10000,"pop":0.07,"sys":{"pod":"n"},"dt_txt":"2020-08-30 06:00:00"}],"city":{"id":6167865,"name":"Toronto","coord":{"lat":43.7001,"lon":-79.4163},"country":"CA","population":4612191,"timezone":-14400,"sunrise":1598697520,"sunset":1598745519}};

class WeatherServiceForecastMock {
    async getForecast() {
      return Promise.resolve(forecastMock);
    }
}

module.exports = {
    forecastMock,
    WeatherServiceForecastMock
}