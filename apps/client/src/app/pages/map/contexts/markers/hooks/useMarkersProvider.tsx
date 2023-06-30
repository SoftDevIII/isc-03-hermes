import { useMemo, useState } from 'react';
import useCoordinates from '../../coordinates/CoordinatesState';
import useEndMarker from './useEndMarker';
import useStartMarker from './useStartMarker';
import useUserMarker from './useUserMarker';

function useMarkerProvider() {
  const {
    startCoordinates,
    setStartCoordinates,
    endCoordinates,
    setEndCoordinates,
    userCoordinates,
    setUserCoordinates
  } = useCoordinates();
  const [isMarking, setIsMarking] = useState(false);

  const {
    setStartMarker,
    removeStartMarker,
    createStartMarkerCoordinates,
    updateStartMarkerCoordinates
  } = useStartMarker({
    isMarking,
    setIsMarking,
    coordinates: startCoordinates,
    setCoordinates: setStartCoordinates
  });

  const {
    setEndMarker,
    removeEndMarker,
    createEndMarkerCoordinates,
    updateEndMarkerCoordinates
  } = useEndMarker({
    isMarking,
    setIsMarking,
    coordinates: endCoordinates,
    setCoordinates: setEndCoordinates
  });

  const {
    setUserMarker,
    removeUserMarker,
    createUserMarkerCoordinates,
    updateUserMarkerCoordinates
  } = useUserMarker({
    isMarking,
    setIsMarking,
    coordinates: userCoordinates,
    setCoordinates: setUserCoordinates
  });

  const coordinatesProviderValue = useMemo(
    () => ({
      setStartMarker,
      removeStartMarker,
      createStartMarkerCoordinates,
      updateStartMarkerCoordinates,
      setEndMarker,
      removeEndMarker,
      createEndMarkerCoordinates,
      updateEndMarkerCoordinates,
      setUserMarker,
      removeUserMarker,
      createUserMarkerCoordinates,
      updateUserMarkerCoordinates,
      isMarking,
      setIsMarking
    }),
    [
      isMarking,
      createStartMarkerCoordinates,
      createEndMarkerCoordinates,
      createUserMarkerCoordinates,
      removeStartMarker,
      removeEndMarker,
      removeUserMarker,
      setStartMarker,
      setEndMarker,
      setUserMarker,
      updateStartMarkerCoordinates,
      updateEndMarkerCoordinates,
      updateUserMarkerCoordinates
    ]
  );

  return coordinatesProviderValue;
}

export default useMarkerProvider;
