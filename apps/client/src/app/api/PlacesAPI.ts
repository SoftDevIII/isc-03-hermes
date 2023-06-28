import axios from 'axios';

const PlacesAPI = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token: import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN,
    country: 'bo'
  }
});

export default PlacesAPI;
