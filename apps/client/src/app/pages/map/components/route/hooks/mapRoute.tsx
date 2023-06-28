import { LngLat } from 'mapbox-gl';

interface Step {
  maneuver: {
    instruction: string;
  };
}

interface DirectionsResponse {
  routes: {
    legs: {
      steps: Step[];
      duration: number;
    }[];
  }[];
}

const calculateRoute = async (
  start: LngLat,
  end: LngLat,
  mode: 'driving' | 'walking' | 'cycling'
): Promise<{
  route: string[];
}> => {
  let url: string;
  if (mode === 'driving') {
    url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lng},${
      start.lat
    };${end.lng},${end.lat}?access_token=${
      import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN
    }`;
  } else if (mode === 'walking') {
    url = `https://api.mapbox.com/directions/v5/mapbox/walking/${start.lng},${
      start.lat
    };${end.lng},${end.lat}?access_token=${
      import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN
    }`;
  } else if (mode === 'cycling') {
    url = `https://api.mapbox.com/directions/v5/mapbox/cycling/${start.lng},${
      start.lat
    };${end.lng},${end.lat}?access_token=${
      import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN
    }`;
  } else {
    throw new Error('Invalid mode');
  }

  const response = await fetch(url);
  const data = (await response.json()) as DirectionsResponse;

  const { legs } = data.routes[0];

  const route = legs[0].steps.map((step: Step) => step.maneuver.instruction);

  return {
    route
  };
};

export default calculateRoute;
