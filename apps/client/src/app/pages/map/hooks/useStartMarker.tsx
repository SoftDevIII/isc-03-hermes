import useCoordinates from '../context/coordinates/CoordinatesState';
import useMarker from './useMarker';

function useStartMarker() {
  const { setStartCoordinates } = useCoordinates();
  const { setMarker, removeMarker } = useMarker({
    setCoordinates: setStartCoordinates,
    type: 'start'
  });

  return {
    setStartMarker: setMarker,
    removeStartMarker: removeMarker
  };
}

export default useStartMarker;
