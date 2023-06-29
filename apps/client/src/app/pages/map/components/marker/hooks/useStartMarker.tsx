import startMarker from '@map-assets/start-marker.png';
import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMarker from '@map-hooks/useMarker';

function useStartMarker() {
  const { setStartCoordinates } = useCoordinates();
  const { setMarker, removeMarker } = useMarker({
    setCoordinates: setStartCoordinates,
    type: 'start',
    icon: startMarker
  });

  return {
    setStartMarker: setMarker,
    removeStartMarker: removeMarker
  };
}

export default useStartMarker;
