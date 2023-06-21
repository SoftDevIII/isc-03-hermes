import useCoordinates from '../context/coordinates/CoordinatesState';
import useMarker from './useMarker';

function useEndMarker() {
  const { setEndCoordinates } = useCoordinates();
  const { setMarker, removeMarker } = useMarker({
    setCoordinates: setEndCoordinates,
    type: 'end'
  });

  return { setEndMarker: setMarker, removeEndMarker: removeMarker };
}

export default useEndMarker;
