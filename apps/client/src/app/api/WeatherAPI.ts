import axios from 'axios';

const WeatherAPI = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  params: {
    appid: import.meta.env.VITE_OPEN_WEATHER_TOKEN,
    units: 'metric'
  }
});

export default WeatherAPI;
