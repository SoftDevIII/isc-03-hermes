import { LngLat } from 'mapbox-gl';
import { useMemo, useState } from 'react';

function useCoordinatesProvider() {
  const [startCoordinates, setStartCoordinates] = useState<LngLat>(
    new LngLat(0, 0)
  );

  const [endCoordinates, setEndCoordinates] = useState<LngLat>(
    new LngLat(0, 0)
  );

  const [isMarking, setIsMarking] = useState(false);

  const coordinatesProviderValue = useMemo(
    () => ({
      startCoordinates,
      setStartCoordinates,
      endCoordinates,
      setEndCoordinates,
      isMarking,
      setIsMarking
    }),
    [startCoordinates, endCoordinates, isMarking]
  );

  return coordinatesProviderValue;
}

export default useCoordinatesProvider;
