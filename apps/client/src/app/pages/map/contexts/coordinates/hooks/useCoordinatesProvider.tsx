import { LngLat } from 'mapbox-gl';
import { useMemo, useState } from 'react';

function useCoordinatesProvider() {
  const [startCoordinates, setStartCoordinates] = useState<LngLat | null>(null);

  const [endCoordinates, setEndCoordinates] = useState<LngLat | null>(null);

  const [userCoordinates, setUserCoordinates] = useState<LngLat | null>(null);

  const coordinatesProviderValue = useMemo(
    () => ({
      startCoordinates,
      setStartCoordinates,
      endCoordinates,
      setEndCoordinates,
      userCoordinates,
      setUserCoordinates
    }),
    [startCoordinates, endCoordinates, userCoordinates]
  );

  return coordinatesProviderValue;
}

export default useCoordinatesProvider;
