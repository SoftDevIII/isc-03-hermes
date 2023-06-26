const calculateRoute = async (
  start: number[],
  end: number[]
): Promise<{
  distance: number;
  duration: number;
  route: any[];
}> => {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?access_token=pk.eyJ1IjoibW9ydmVuLTExIiwiYSI6ImNsaTNtNmpueTBrYWQzcnIyZTcxYWNpNTkifQ.6yfo49_0daERompDzjTOEg&steps=true`
  );
  const data = await response.json();

  const { distance, duration, legs } = data.routes[0];

  const route = legs[0].steps.map((step: any) => step.maneuver.instruction);
  return {
    distance,
    duration,
    route
  };
};

export default calculateRoute;
