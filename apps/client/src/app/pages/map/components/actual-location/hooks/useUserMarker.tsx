import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMap from '@map-contexts/map/MapState';
import '@map-styles/marker.css';
import { LngLat, Marker } from 'mapbox-gl';
import { useRef } from 'react';

function useUserMarker({ setIsMarked }: UseUserMarkerProps) {
  const { setUserCoordinates } = useCoordinates();
  const { map } = useMap();
  const marker = useRef<Marker>();

  const createMarker = ({ coordinates }: CreateMarkerProps) => {
    if (!map.current) {
      return;
    }

    const newMarker = new Marker().setLngLat(coordinates);
    newMarker.getElement().innerHTML = `<div><div class='user-marker'></div><div class='user-shadow'></div></div>`;
    newMarker.addTo(map.current);
    setMarker(newMarker);
    marker.current = new Marker().setLngLat(coordinates);
    marker.current.getElement().innerHTML = `<div><div class='user-marker'></div><div class='user-shadow'></div></div>`;
    marker.current.addTo(map.current);
    marker.current = new Marker().setLngLat(coordinates);
    marker.current.getElement().innerHTML = `<div><div class='user-marker'></div><div class='user-shadow'></div></div>`;
    marker.current.addTo(map.current);
  };

  const createUserMarker = ({ coordinates }: CreateUserMarkerProps) => {
    setUserCoordinates(coordinates);
    createMarker({ coordinates });
    setIsMarked(true);
  };

  const removeUserMarker = () => {
    marker.current?.remove();
    setUserCoordinates(new LngLat(0, 0));
    setIsMarked(false);
  };

  const updateCoordinates = ({ coordinates }: UpdateCoordinatesProps) => {
    marker.current?.setLngLat(coordinates);
    setUserCoordinates(coordinates);
  };

  return {
    createUserMarker,
    removeUserMarker,
    updateCoordinates
  };
}

export default useUserMarker;
