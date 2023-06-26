const calculateTimeOnFoot = async (
  start: number[],
  end: number[]
): Promise<string> => {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${
      start[1]
    };${end[0]},${end[1]}?access_token=${
      import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN
    }`
  );

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await response.json();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const { duration } = data.routes[0].legs[0];
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  const timeString = `${minutes} minutos ${seconds} segundos`;

  return timeString;
};
const calculateTimeOnCycling = async (
  start: number[],
  end: number[]
): Promise<string> => {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${
      start[1]
    };${end[0]},${end[1]}?access_token=${
      import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN
    }`
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await response.json();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const { duration } = data.routes[0].legs[0];
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  const timeString = `${minutes} minutos ${seconds} segundos`;

  return timeString;
};
const calculateTimeOnDriving = async (
  start: number[],
  end: number[]
): Promise<string> => {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${
      start[1]
    };${end[0]},${end[1]}?access_token=${
      import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN
    }`
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await response.json();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const { duration } = data.routes[0].legs[0];
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  const timeString = `${minutes} minutos ${seconds} segundos`;

  return timeString;
};
