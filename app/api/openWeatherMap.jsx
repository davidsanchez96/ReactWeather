const axios = require('axios');

const URL_OPEN_WEATHER_MAP = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = 'a13e38e1bfa2f12043bfb82d29fe0bbc';

module.exports = {
    getWeather(location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${URL_OPEN_WEATHER_MAP}${encodedLocation}`;
        return axios.get(requestUrl, {
            params: {
                appid: API_KEY,
                units: 'metric'
            }
        }).then(function(response) {
            return response.data.main.temp;
        }).catch(function(error) {
            console.log(error);
        });
    }
};
