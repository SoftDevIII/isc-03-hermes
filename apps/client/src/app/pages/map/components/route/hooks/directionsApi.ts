import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1IjoiYWxlN3c3IiwiYSI6ImNsamh0dWFxbzAxdGUzc2xsb3ppZ2twMWIifQ.aXlAWEWtXwy_6c5g2yw0Yg'
  }
});

export default directionsApi;
