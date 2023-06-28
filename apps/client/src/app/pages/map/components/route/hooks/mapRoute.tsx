import { LngLat } from 'mapbox-gl';

const calculateRoute = async (
  start: LngLat,
  end: LngLat
): Promise<{
  route: string[];
}> => {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lat},${
      start.lng
    };${end.lat},${end.lng}?access_token=${
      import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN
    }`
  );

  interface DirectionsResponse {
    routes: {
      legs: {
        steps: {
          maneuver: {
            instruction: string;
          };
        }[];
      }[];
    }[];
  }

  const data = (await response.json()) as DirectionsResponse;
  const { legs } = data.routes[0];
  const route: string[] = [];

  legs.forEach(leg => {
    leg.steps.forEach(step => {
      route.push(step.maneuver.instruction);
    });
  });

  return { route };
};

export default calculateRoute;
