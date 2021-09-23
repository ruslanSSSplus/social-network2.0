
import axios from "axios";
const API_KEY = '979ab0a1c46cbdc9cb27c613e41479b4'

export const weatherAPI = {
    getWeather(latitude: number, longitude: number ) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    },

}