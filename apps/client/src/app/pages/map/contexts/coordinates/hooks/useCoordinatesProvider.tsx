import { LngLat } from 'mapbox-gl';
import { useMemo, useState } from 'react';

function useCoordinatesProvider() {
  const [startCoordinates, setStartCoordinates] = useState<LngLat | null>(null);

  const [endCoordinates, setEndCoordinates] = useState<LngLat | null>(null);

  const [userCoordinates, setUserCoordinates] = useState<LngLat>(
    new LngLat(0, 0)
  );

  const [contextMenuCoordinates, setContextMenuCoordinates] = useState<LngLat>(
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
      setIsMarking,
      contextMenuCoordinates,
      setContextMenuCoordinates
    }),
    [
      startCoordinates,
      endCoordinates,
      userCoordinates,
      isMarking,
      contextMenuCoordinates
    ]
  );

  return coordinatesProviderValue;
}

export default useCoordinatesProvider;
