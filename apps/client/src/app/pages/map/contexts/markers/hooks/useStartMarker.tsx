import MarkerType from '@enums/Marker';
import iconMarker from '@map-assets/start-marker.png';
import useMarker from '@map-hooks/useMarker';

function useStartMarker({
  isMarking,
  setIsMarking,
  coordinates,
  setCoordinates
}: UseStartMarkerProps) {
  const {
    setMarker,
    removeMarker,
    createMarkerCoordinates,
    updateCoordinates
  } = useMarker({
    coordinates,
    setCoordinates,
    type: MarkerType.START,
    icon: iconMarker,
    isMarking,
    setIsMarking
  });

  return {
    setStartMarker: setMarker,
    removeStartMarker: removeMarker,
    createStartMarkerCoordinates: createMarkerCoordinates,
    updateStartMarkerCoordinates: updateCoordinates
  };
}

export default useStartMarker;
