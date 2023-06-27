import startMarker from '@map-assets/start-marker.png';
import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMarker from '@map-hooks/useMarker';
import { LngLat } from 'mapbox-gl';

function useStartMarker() {
  const { setStartCoordinates } = useCoordinates();
  const { setMarker, removeMarker, createMarkerFromCoordinates } = useMarker({
    setCoordinates: setStartCoordinates,
    type: 'start',
    icon: startMarker
  });

  return {
    setStartMarker: setMarker,
    removeStartMarker: removeMarker,
    setStartMarkerFromCoordinates: (lngLat: LngLat) => {
      createMarkerFromCoordinates(lngLat);
    }
  };
}

export default useStartMarker;
