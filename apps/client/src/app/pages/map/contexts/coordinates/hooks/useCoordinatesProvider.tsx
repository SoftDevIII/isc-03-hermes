import { LngLat } from 'mapbox-gl';
import { useMemo, useState } from 'react';

function useCoordinatesProvider() {
  const [startCoordinates, setStartCoordinates] = useState<LngLat | null>(null);

  const [endCoordinates, setEndCoordinates] = useState<LngLat | null>(null);

  const [userCoordinates, setUserCoordinates] = useState<LngLat>(
    new LngLat(0, 0)
  );

  const [isMarking, setIsMarking] = useState(false);

  const coordinatesProviderValue = useMemo(
    () => ({
      startCoordinates,
      setStartCoordinates,
      endCoordinates,
      setEndCoordinates,
      userCoordinates,
      setUserCoordinates,
      isMarking,
      setIsMarking
    }),
    [startCoordinates, endCoordinates, userCoordinates, isMarking]
  );

  return coordinatesProviderValue;
}

export default useCoordinatesProvider;
