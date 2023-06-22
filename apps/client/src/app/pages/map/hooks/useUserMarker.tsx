import userMarker from '@assets/user-marker.png';
import useCoordinates from '../context/coordinates/CoordinatesState';
import useMarker from './useMarker';

function useUserMarker() {
  const { setUserCoordinates } = useCoordinates();
  const { setMarker, removeMarker, createMarkerFromCoordinates } = useMarker({
    setCoordinates: setUserCoordinates,
    type: 'user',
    icon: userMarker
  });

  return {
    setUserMarker: setMarker,
    removeUserMarker: removeMarker,
    createMarkerFromCoordinates
  };
}

export default useUserMarker;
