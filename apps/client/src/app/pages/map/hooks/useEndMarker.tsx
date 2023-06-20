import useCoordinates from '../context/coordinates/CoordinatesState';
import useMarker from './useMarker';

function useEndMarker() {
  const { setStartCoordinates } = useCoordinates();
  const { setMarker, removeMarker } = useMarker({
    setCoordinates: setStartCoordinates
  });

  return { setEndMarker: setMarker, removeEndMarker: removeMarker };
}

export default useEndMarker;
