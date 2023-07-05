import MarkerType from '@enums/Marker';
import useMarker from '@map-hooks/useMarker';

function useUserMarker({
  isMarking,
  setIsMarking,
  coordinates,
  setCoordinates
}: UseUserMarkerProps) {
  const {
    setMarker,
    removeMarker,
    createMarkerCoordinates,
    updateCoordinates
  } = useMarker({
    coordinates,
    setCoordinates,
    type: MarkerType.USER,
    isMarking,
    setIsMarking
  });

  return {
    setUserMarker: setMarker,
    removeUserMarker: removeMarker,
    createUserMarkerCoordinates: createMarkerCoordinates,
    updateUserMarkerCoordinates: updateCoordinates
  };
}

export default useUserMarker;
