import userMarker from '@map-assets/start-marker.png';
import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMarker from '@map-hooks/useMarker';

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
