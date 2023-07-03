import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface DirectionsApiInstance extends AxiosInstance {
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;
}

const config: AxiosRequestConfig = {
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1IjoiYWxlN3c3IiwiYSI6ImNsamh0dWFxbzAxdGUzc2xsb3ppZ2twMWIifQ.aXlAWEWtXwy_6c5g2yw0Yg'
  }
};

const directionsApi: DirectionsApiInstance = axios.create(
  config
) as DirectionsApiInstance;

export default directionsApi;
