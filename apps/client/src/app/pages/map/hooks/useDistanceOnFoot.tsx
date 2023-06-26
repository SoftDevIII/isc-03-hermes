// Función para calcular la distancia a pie
const calculateDistanceOnFoot = async (
  start: number[],
  end: number[]
): Promise<number> => {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${
      start[1]
    };${end[0]},${end[1]}?access_token=${
      import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN
    }`
  );
  const data = await response.json();

  const { distance } = data.routes[0];
  const distanceInKilometers = Math.round((distance / 1000) * 100) / 100;

  return distanceInKilometers;
};

export default calculateDistanceOnFoot;
