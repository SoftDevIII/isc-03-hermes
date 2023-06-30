import { LngLat, Marker } from 'mapbox-gl';
import { useMemo, useRef, useState } from 'react';

function useCoordinatesProvider() {
  const [startCoordinates, setStartCoordinates] = useState<LngLat | null>(null);
  const startMarker = useRef<Marker>(new Marker());

  const [endCoordinates, setEndCoordinates] = useState<LngLat | null>(null);
  const endMarker = useRef<Marker>(new Marker());

  const [userCoordinates, setUserCoordinates] = useState<LngLat | null>(null);
  const userMarker = useRef<Marker>(new Marker());

  const [isMarking, setIsMarking] = useState(false);

  const coordinatesProviderValue = useMemo(
    () => ({
      startCoordinates,
      setStartCoordinates,
      startMarker,
      endCoordinates,
      setEndCoordinates,
      endMarker,
      userCoordinates,
      setUserCoordinates,
      userMarker,
      isMarking,
      setIsMarking
    }),
    [
      startCoordinates,
      startMarker,
      endCoordinates,
      endMarker,
      userCoordinates,
      userMarker,
      isMarking
    ]
  );

  return coordinatesProviderValue;
}

export default useCoordinatesProvider;
