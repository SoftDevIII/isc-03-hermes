import endMarker from '@map-assets/end-marker.png';
import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMarker from '@map-hooks/useMarker';
import { LngLat } from 'mapbox-gl';

function useEndMarker() {
  const { setEndCoordinates } = useCoordinates();
  const { setMarker, removeMarker, createMarkerFromCoordinates } = useMarker({
    setCoordinates: setEndCoordinates,
    type: 'end',
    icon: endMarker
  });

  return {
    setEndMarker: setMarker,
    removeEndMarker: removeMarker,
    setEndMarkerFromCoordinates: (lngLat: LngLat) => {
      createMarkerFromCoordinates(lngLat);
    }
  };
}

export default useEndMarker;
