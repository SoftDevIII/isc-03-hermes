import axios from 'axios';

const DataBaseAPI = axios.create({
  baseURL: '/src/assets/data'
});

export default DataBaseAPI;
