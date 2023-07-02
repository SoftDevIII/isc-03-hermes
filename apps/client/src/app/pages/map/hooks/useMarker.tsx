import MarkerType from '@enums/Marker';
import defaultIcon from '@map-assets/start-marker.png';
import useMap from '@map-contexts/map/MapState';
import { LngLat, MapMouseEvent, Marker } from 'mapbox-gl';
import { useRef } from 'react';

function useMarker({
  coordinates,
  setCoordinates,
  isMarking,
  setIsMarking,
  type = MarkerType.DEFAULT,
  icon = defaultIcon
}: UseMarkerProps) {
  const { map } = useMap();

  const marker = useRef<Marker>(new Marker());

  const createMarker = (lngLat: LngLat) => {
    if (!map.current || !marker.current) {
      return;
    }
    marker.current.setLngLat(lngLat);
    if (type === MarkerType.USER) {
      marker.current.getElement().innerHTML = `<div><div class='user-marker'></div><div class='user-shadow'></div></div>`;
    } else {
      marker.current.getElement().innerHTML = `<div><div class='animate-bounce'><div class='marker ${type}'></div></div><div class='shadow shadow-${type}'></div></div>`;
    }
    marker.current.addTo(map.current);
  };

  const handleClick = (event: MapMouseEvent) => {
    if (!map.current || map.current.getCanvas().style.cursor === '') {
      map.current?.off('click', handleClick);
      return;
    }
    setIsMarking(false);
    map.current.off('click', handleClick);
    map.current.getCanvas().style.cursor = '';
    setCoordinates(event.lngLat);
    createMarker(event.lngLat);
  };

  const setPoint = () => {
    if (coordinates !== null || !map.current || isMarking) {
      return;
    }
    map.current.getCanvas().style.cursor = `url(${icon}) 18 30, pointer`;
    setIsMarking(true);
    map.current.on('click', handleClick);
  };

  const removePoint = () => {
    if (coordinates === null) {
      return;
    }
    marker.current.remove();
    setCoordinates(null);
  };

  const createMarkerCoordinates = ({
    coordinatesToMark
  }: CreateMarkerCoordinatesProps) => {
    if (coordinates !== null) {
      marker.current.remove();
    }
    setCoordinates(coordinatesToMark);
    createMarker(coordinatesToMark);
  };

  const updateCoordinates = ({
    coordinatesToUpdate
  }: UpdateCoordinatesProps) => {
    marker.current.setLngLat(coordinatesToUpdate);
    setCoordinates(coordinatesToUpdate);
  };

  return {
    setMarker: setPoint,
    removeMarker: removePoint,
    createMarkerCoordinates,
    updateCoordinates
  };
}

export default useMarker;
