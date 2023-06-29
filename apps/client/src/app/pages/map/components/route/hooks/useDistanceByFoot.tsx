import { LngLat } from 'mapbox-gl';

const calculateDistanceOnFoot = async (
  start: LngLat,
  end: LngLat
): Promise<number> => {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/walking/${start.lat},${
      start.lng
    };${end.lat},${end.lng}?access_token=${
      import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN
    }`
  );
  const data = (await response.json()) as DirectionsResponse;

  const distanceMeters = 1000;
  const roundOut = 100;
  const percent = 100;

  const { distance } = data.routes[0];
  const distanceInKilometers =
    Math.round((distance / distanceMeters) * percent) / roundOut;

  return distanceInKilometers;
};

export default calculateDistanceOnFoot;
