# Proyecto de api con Node/express para consultar el clima
- La api consulta el clima, segun donde estas o especificando una ciudad.

# EndPoints

| Description | HTTP Verb | Endpoint |
| ------------- | ------------- | ------------- |
| [Get location](#Get-location) | GET | /v1/location |
| [Get current](#Get-current) | GET | /v1/current[/ciudad] |
| [Get forecast](#Get-forecast) | GET | /v1/forecast[/ciudad] |


- En el directorio /routes/api/weather.js.
Se encuentran los endpoint que se utilizaran para realizar las consultas que retornaran la informacion en formato json. Desde la api consume los servicios de /services/weather.js que se conecta con la api de openweathermap pero antes consume el servicio de /services/ipapi.js que por medio de la ip proporciona los datos necesario para utilizar en openweathermap.

# Get location

### Request

`
GET /v1/location
`
### Response

```
{
    "coord": {
        "lon": -58.38,
        "lat": -34.61
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 287.57,
        "feels_like": 285.86,
        "temp_min": 287.15,
        "temp_max": 288.15,
        "pressure": 1015,
        "humidity": 76
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.6,
        "deg": 180
    },
    "clouds": {
        "all": 90
    },
    "dt": 1598723591,
    "sys": {
        "type": 1,
        "id": 8224,
        "country": "AR",
        "sunrise": 1598696155,
        "sunset": 1598736789
    },
    "timezone": -10800,
    "id": 3435910,
    "name": "Buenos Aires",
    "cod": 200
}
```

# Get current

### Request

`
GET /v1/current[/ciudad]
`
### Response

```
{
    "coord": {
        "lon": -79.42,
        "lat": 43.7
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 298.33,
        "feels_like": 295.86,
        "temp_min": 297.04,
        "temp_max": 299.26,
        "pressure": 996,
        "humidity": 69
    },
    "visibility": 10000,
    "wind": {
        "speed": 8.2,
        "deg": 240,
        "gust": 11.3
    },
    "clouds": {
        "all": 75
    },
    "dt": 1598723921,
    "sys": {
        "type": 1,
        "id": 941,
        "country": "CA",
        "sunrise": 1598697521,
        "sunset": 1598745520
    },
    "timezone": -14400,
    "id": 6167865,
    "name": "Toronto",
    "cod": 200
}
```

# Get forecast

### Request

`
GET /v1/forecast[/ciudad]
`
### Response

```
{
    "cod": "200",
    "message": 0,
    "cnt": 5,
    "list": [
        {
            "dt": 1598724000,
            "main": {
                "temp": 23.78,
                "feels_like": 20.56,
                "temp_min": 22.31,
                "temp_max": 23.78,
                "pressure": 996,
                "sea_level": 997,
                "grnd_level": 978,
                "humidity": 67,
                "temp_kf": 1.47
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 81
            },
            "wind": {
                "speed": 8.16,
                "deg": 311
            },
            "visibility": 10000,
            "pop": 0.53,
            "rain": {
                "3h": 0.29
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-29 18:00:00"
        },
        {
            "dt": 1598734800,
            "main": {
                "temp": 23.13,
                "feels_like": 19.08,
                "temp_min": 22.57,
                "temp_max": 23.13,
                "pressure": 999,
                "sea_level": 1000,
                "grnd_level": 980,
                "humidity": 59,
                "temp_kf": 0.56
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 25
            },
            "wind": {
                "speed": 7.92,
                "deg": 302
            },
            "visibility": 10000,
            "pop": 0.02,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2020-08-29 21:00:00"
        },
        {
            "dt": 1598745600,
            "main": {
                "temp": 20.52,
                "feels_like": 16.45,
                "temp_min": 20.2,
                "temp_max": 20.52,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 982,
                "humidity": 59,
                "temp_kf": 0.32
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 9
            },
            "wind": {
                "speed": 6.8,
                "deg": 297
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-30 00:00:00"
        },
        {
            "dt": 1598756400,
            "main": {
                "temp": 18.29,
                "feels_like": 13.87,
                "temp_min": 18.23,
                "temp_max": 18.29,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 983,
                "humidity": 63,
                "temp_kf": 0.06
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 9
            },
            "wind": {
                "speed": 6.83,
                "deg": 291
            },
            "visibility": 10000,
            "pop": 0.06,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-30 03:00:00"
        },
        {
            "dt": 1598767200,
            "main": {
                "temp": 17.06,
                "feels_like": 12.98,
                "temp_min": 17.06,
                "temp_max": 17.06,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 984,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 6.34,
                "deg": 302
            },
            "visibility": 10000,
            "pop": 0.07,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2020-08-30 06:00:00"
        }
    ],
    "city": {
        "id": 6167865,
        "name": "Toronto",
        "coord": {
            "lat": 43.7001,
            "lon": -79.4163
        },
        "country": "CA",
        "population": 4612191,
        "timezone": -14400,
        "sunrise": 1598697520,
        "sunset": 1598745519
    }
}
```

## Utils
- En el directorio /utils/ encontramos los mocks y testServer que se utilizanran para ejecutar los test de pruebas para nuestros endpoint

## Api utilizadas
- Se utiliza ipapi para obtener: ciudad, latitud y longitud mediante la ip. 
https://ipapi.co/api/#introduction

- Se utiliza openweathermap para obtener el clima mediante los datos que proporciona ipapi (ciudad, latitud y logitud)
https://openweathermap.org/

## Dependencias
dependencias instaladas
- axios: npm install axios (client http)
- body-parser: npm install body-parser ( middleware )
- dotenv: npm i -S dotenv (variables de entorno)
- public-ip: npm install public-ip (obtener ip)
- sentry: npm install --save @sentry/node (manejo de log de errores)
- test: npm i -D supertest mocha sinon proxyquire 

## Ejecucio del proyecto y test
run the app:
     DEBUG=api-weather:* npm start

run the test: 
     npm run test or npm t