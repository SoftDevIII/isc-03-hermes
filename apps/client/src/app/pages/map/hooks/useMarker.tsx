import { LngLat, MapMouseEvent, Marker } from 'mapbox-gl';
import { useRef, useState } from 'react';
import useCoordinates from '../context/coordinates/CoordinatesState';
import useMap from '../context/map/MapState';

function useMarker({ setCoordinates, type, icon }: UseMarkerProps) {
  const { map } = useMap();
  const { isMarking, setIsMarking } = useCoordinates();

  const marker = useRef<Marker>(new Marker());
  const [isMarked, setIsMarked] = useState(false);

  const createMarker = (lngLat: LngLat) => {
    if (!map.current) {
      return;
    }
    marker.current = new Marker().setLngLat(lngLat);
    marker.current.getElement().innerHTML = `<div><div class='animate-bounce'><div class='marker ${type}'></div></div><div class='shadow shadow-${type}'></div></div>`;
    marker.current.addTo(map.current);
  };

  const handleClick = (event: MapMouseEvent) => {
    if (!map.current) {
      return;
    }
    map.current.off('click', handleClick);
    map.current.getCanvas().style.cursor = '';
    setCoordinates(event.lngLat);
    createMarker(event.lngLat);
    setIsMarking(false);
    setIsMarked(true);
  };

  const setPoint = () => {
    if (isMarked || !map.current || isMarking) {
      return;
    }
    setIsMarking(true);
    map.current.on('click', handleClick);
    map.current.getCanvas().style.cursor = `url(${icon}) 24 49, pointer`;
  };

  const removePoint = () => {
    if (!isMarked) {
      return;
    }
    marker.current.remove();
    setIsMarked(false);
    setCoordinates(new LngLat(0, 0));
  };

  return { setMarker: setPoint, removeMarker: removePoint };
}

export default useMarker;
