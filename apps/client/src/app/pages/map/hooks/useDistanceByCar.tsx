import { LngLat } from 'mapbox-gl';

interface DirectionsResponse {
  routes: {
    distance: number;
  }[];
}

const calculateDistanceByCar = async (
  start: LngLat,
  end: LngLat
): Promise<number> => {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lat},${
      start.lng
    };${end.lat},${end.lng}?access_token=${
      import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN
    }`
  );
  const data = (await response.json()) as DirectionsResponse;

  const { distance } = data.routes[0];
  const distanceInKilometers = Math.round((distance / 1000) * 100) / 100;

  return distanceInKilometers;
};
export default calculateDistanceByCar;
