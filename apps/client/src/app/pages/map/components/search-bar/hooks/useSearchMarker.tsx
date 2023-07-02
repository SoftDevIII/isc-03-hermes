import useMap from '@map-contexts/map/MapState';
import '@map-styles/marker.css';
import { LngLat, Marker } from 'mapbox-gl';
import { useRef, useState } from 'react';

function useSearchMarker({ setCoordinates }: UseSearchMarkerProps) {
  const { map } = useMap();

  const marker = useRef<Marker>(new Marker());
  const [isMarked, setIsMarked] = useState(false);

  const createMarker = (coordinates: number[]) => {
    if (!map.current) {
      return;
    }
    if (isMarked) {
      marker.current.remove();
    }
    const lngLat = new LngLat(coordinates[0], coordinates[1]);
    setIsMarked(true);
    setCoordinates(lngLat);
    marker.current.setLngLat(lngLat);
    marker.current.addTo(map.current);
    map.current.flyTo({ center: lngLat, zoom: 15 });
  };

  const removePoint = () => {
    if (!isMarked) {
      return;
    }
    setIsMarked(false);
    setCoordinates(new LngLat(0, 0));
    marker.current.remove();
  };

  return {
    removeMarker: removePoint,
    createMarker
  };
}

export default useSearchMarker;
