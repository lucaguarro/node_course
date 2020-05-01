const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bf9b0707e5308f3a0c1743ff228d460d&query=' + latitude + ',' + longitude + '&units=f'
    request({url: url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) { 
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                desc: body.current.weather_descriptions[0],
                currentTemp: body.current.temperature,
                currentFeelsLike: body.current.feelslike
            })
        }
    })
}
module.exports = forecast