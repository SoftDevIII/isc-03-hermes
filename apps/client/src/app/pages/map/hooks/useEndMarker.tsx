import endMarker from '@assets/end-marker.png';
import useCoordinates from '../context/coordinates/CoordinatesState';
import useMarker from './useMarker';

function useEndMarker() {
  const { setEndCoordinates } = useCoordinates();
  const { setMarker, removeMarker } = useMarker({
    setCoordinates: setEndCoordinates,
    type: 'end',
    icon: endMarker
  });

  return { setEndMarker: setMarker, removeEndMarker: removeMarker };
}

export default useEndMarker;
