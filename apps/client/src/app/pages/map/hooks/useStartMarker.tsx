import { LngLat, MapMouseEvent, Marker } from 'mapbox-gl';
import { useRef, useState } from 'react';
import useCoordinates from '../context/coordinates/CoordinatesState';
import useMap from '../context/map/MapState';

function useStartMarker() {
  const { map } = useMap();
  const { setStartCoordinates } = useCoordinates();

  const marker = useRef<Marker>();
  const [isStartingPoint, setIsStartingPoint] = useState(false);

  const createMarker = (lngLat: LngLat) => {
    if (!map.current) {
      return;
    }
    marker.current = new Marker().setLngLat(lngLat).addTo(map.current);
  };

  const handleClick = (event: MapMouseEvent) => {
    setStartCoordinates(event.lngLat);
    createMarker(event.lngLat);
    map.current?.off('click', handleClick);
  };

  const setStartPoint = () => {
    if (isStartingPoint) {
      return;
    }
    setIsStartingPoint(true);
    map.current?.on('click', handleClick);
  };

  const removeMarker = () => {
    if (!marker.current) {
      return;
    }
    marker.current.remove();
  };

  const removeStartPoint = () => {
    if (!isStartingPoint) {
      return;
    }
    setIsStartingPoint(false);
    removeMarker();
    setStartCoordinates(new LngLat(0, 0));
  };

  return { setStartPoint, removeStartPoint };
}

export default useStartMarker;
