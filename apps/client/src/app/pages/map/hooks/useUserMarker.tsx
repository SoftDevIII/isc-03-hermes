import userMarker from '@assets/user-marker.png';
import { useEffect } from 'react';
import useCoordinates from '../context/coordinates/CoordinatesState';
import useMarker from './useMarker';

function useUserMarker() {
  const { userCoordinates, setUserCoordinates } = useCoordinates();
  const { setMarker, removeMarker, createMarkerFromCoordinates } = useMarker({
    setCoordinates: setUserCoordinates,
    type: 'user',
    icon: userMarker
  });

  useEffect(() => {
    if (userCoordinates) {
      createMarkerFromCoordinates(userCoordinates);
    }
  }, [userCoordinates, createMarkerFromCoordinates]);

  return {
    setUserMarker: setMarker,
    removeUserMarker: removeMarker,
    createMarkerFromCoordinates
  };
}

export default useUserMarker;
