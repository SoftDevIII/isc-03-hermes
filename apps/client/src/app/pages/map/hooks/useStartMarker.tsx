import useCoordinates from '../context/coordinates/CoordinatesState';
import useMarker from './useMarker';

function useStartMarker() {
  const { setEndCoordinates } = useCoordinates();
  const { setMarker, removeMarker } = useMarker({
    setCoordinates: setEndCoordinates,
    type: 'start'
  });

  return { setStartMarker: setMarker, removeStartMarker: removeMarker };
}

export default useStartMarker;
