import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMap from '@map-contexts/map/MapState';
import '@map-styles/marker.css';
import { LngLat, Marker } from 'mapbox-gl';

function useUserMarker({ marker, setMarker, setIsMarked }: UseUserMarkerProps) {
  const { setUserCoordinates } = useCoordinates();
  const { map } = useMap();

  const createMarker = ({ coordinates }: CreateMarkerProps) => {
    if (!map.current) {
      return;
    }

    const newMarker = new Marker().setLngLat(coordinates);
    // newMarker.getElement().innerHTML = `<div><div class='user-marker'></div><div class='user-shadow'></div></div>`;
    newMarker.addTo(map.current);
    setMarker(newMarker);
  };

  const createUserMarker = ({ coordinates }: CreateUserMarkerProps) => {
    setUserCoordinates(coordinates);
    createMarker({ coordinates });
    setIsMarked(true);
  };

  const removeUserMarker = () => {
    marker.remove();
    setUserCoordinates(new LngLat(0, 0));
    setIsMarked(false);
  };

  const updateCoordinates = ({ coordinates }: UpdateCoordinatesProps) => {
    marker.setLngLat(coordinates);
    setUserCoordinates(coordinates);
  };

  return {
    createUserMarker,
    removeUserMarker,
    updateCoordinates
  };
}

export default useUserMarker;
