const calculateRoute = async (
  start: number[],
  end: number[]
): Promise<{
  route: any[];
}> => {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${
      start[1]
    };${end[0]},${end[1]}?access_token=${
      import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN
    }`
  );
  const data = await response.json();

  const { legs } = data.routes[0];

  const route = legs[0].steps.map((step: any) => step.maneuver.instruction);
  return {
    route
  };
};

export default calculateRoute;
