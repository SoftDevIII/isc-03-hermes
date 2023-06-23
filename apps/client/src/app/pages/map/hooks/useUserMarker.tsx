import userMarker from '@assets/start-marker.png';
import useCoordinates from '../context/coordinates/CoordinatesState';
import useMarker from './useMarker';

function useUserMarker() {
  const { setUserCoordinates } = useCoordinates();
  const { setMarker, removeMarker, createMarkerFromCoordinates } = useMarker({
    setCoordinates: setUserCoordinates,
    type: 'user',
    icon: userMarker,
    isUserMarker: true
  });

  return {
    setUserMarker: setMarker,
    removeUserMarker: removeMarker,
    createMarkerFromCoordinates
  };
}

export default useUserMarker;
