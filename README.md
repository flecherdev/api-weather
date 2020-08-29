## Proyecto de api con Node/express para consultar el clima

# EndPoints
- En el directorio /routes/api/weather.js
Se encuentran los endpoint que se utilizaran para realizar las consultas que retornaran la informacion en formato json. Desde la api consume los servicios de /services/weather.js quien a su vez consume el servicio de /services/ipapi.js

# Api utilizadas
- Se utiliza ipapi para obtener: ciudad, latitud y longitud mediante la ip. 
https://ipapi.co/api/#introduction

- Se utiliza openweathermap para obtener el clima mediante los datos que proporciona ipapi (ciudad, latitud y logitud)
https://openweathermap.org/

## Dependencias
dependencias instaladas
- axios: npm install axios 
- body-parser: npm install body-parser ( middleware )
- dotenv: npm i -S dotenv (variables de entorno)
- public-ip: npm install public-ip (obtener ip)
- sentry: npm install --save @sentry/node (manejo de log de errores)

## Ejecucio del proyecto
run the app:
     $ DEBUG=api-weather:* npm start