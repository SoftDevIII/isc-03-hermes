import MarkerType from '@enums/Marker';
import iconMarker from '@map-assets/end-marker.png';
import useMarker from '@map-hooks/useMarker';

function useEndMarker({
  isMarking,
  setIsMarking,
  coordinates,
  setCoordinates
}: UseEndMarkerProps) {
  const {
    setMarker,
    removeMarker,
    createMarkerCoordinates,
    updateCoordinates
  } = useMarker({
    coordinates,
    setCoordinates,
    type: MarkerType.END,
    icon: iconMarker,
    isMarking,
    setIsMarking
  });

  return {
    setEndMarker: setMarker,
    removeEndMarker: removeMarker,
    createEndMarkerCoordinates: createMarkerCoordinates,
    updateEndMarkerCoordinates: updateCoordinates
  };
}

export default useEndMarker;
