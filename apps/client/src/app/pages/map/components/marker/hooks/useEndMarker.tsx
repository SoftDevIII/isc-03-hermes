import endMarker from '@map-assets/end-marker.png';
import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMarker from '@map-hooks/useMarker';

function useEndMarker() {
  const { setEndCoordinates } = useCoordinates();
  const { setMarker, removeMarker } = useMarker({
    setCoordinates: setEndCoordinates,
    type: 'end',
    icon: endMarker
  });

  return {
    setEndMarker: setMarker,
    removeEndMarker: removeMarker
  };
}

export default useEndMarker;
