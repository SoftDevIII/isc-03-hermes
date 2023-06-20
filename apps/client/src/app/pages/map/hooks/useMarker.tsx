import { LngLat, MapMouseEvent, Marker } from 'mapbox-gl';
import { useRef, useState } from 'react';
import useCoordinates from '../context/coordinates/CoordinatesState';
import useMap from '../context/map/MapState';

function useMarker({ setCoordinates }: UseMarkerProps) {
  const { map } = useMap();
  const { isMarking, setIsMarking } = useCoordinates();

  const marker = useRef<Marker>();
  const [isMarked, setIsMarked] = useState(false);

  const createMarker = (lngLat: LngLat) => {
    if (!map.current) {
      return;
    }
    marker.current = new Marker().setLngLat(lngLat).addTo(map.current);
  };

  const handleClick = (event: MapMouseEvent) => {
    if (!map.current) {
      return;
    }
    setCoordinates(event.lngLat);
    createMarker(event.lngLat);
    map.current.off('click', handleClick);
    map.current.getCanvas().style.cursor = '';
    setIsMarking(false);
  };

  const setPoint = () => {
    if (isMarked || !map.current || isMarking) {
      return;
    }
    setIsMarked(true);
    setIsMarking(true);
    map.current.on('click', handleClick);
    map.current.getCanvas().style.cursor =
      'url(/assets/hover-icon.png), pointer';
  };

  const removeMarker = () => {
    if (!marker.current) {
      return;
    }
    marker.current.remove();
  };

  const removePoint = () => {
    if (!isMarked) {
      return;
    }
    setIsMarked(false);
    removeMarker();
    setCoordinates(new LngLat(0, 0));
  };

  return { setMarker: setPoint, removeMarker: removePoint };
}

export default useMarker;
