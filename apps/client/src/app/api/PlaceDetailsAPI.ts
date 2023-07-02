import axios from 'axios';

const PlaceDetailsAPI = axios.create({
  baseURL: './data/places-details.json'
});

export default PlaceDetailsAPI;
