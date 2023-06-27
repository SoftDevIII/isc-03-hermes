import { LngLat } from 'mapbox-gl';

const calculateTravelTime = async (
  start: LngLat,

  end: LngLat
): Promise<number> => {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/cycling/${start.lat},${
      start.lng
    };${end.lat},${end.lng}?access_token=${
      import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN
    }`
  );

  interface DirectionsResponse {
    routes: {
      legs: {
        duration: number;
      }[];
    }[];
  }

  const data = (await response.json()) as DirectionsResponse;

  const { duration } = data.routes[0].legs[0];

  const travelTimeInSeconds = Math.round(duration);

  return travelTimeInSeconds;
};

export default calculateTravelTime;
