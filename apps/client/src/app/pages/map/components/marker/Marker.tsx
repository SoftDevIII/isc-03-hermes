import RoomIcon from '@mui/icons-material/Room';
import mapboxgl, { LngLat, Marker as MapBoxMarker } from 'mapbox-gl';
import { useRef, useState } from 'react';
import useMap from '../../context/map/MapState';
import MarkerButton from '../../shared-ui-components/MarkerButton';
import CoordinatesDisplay from './components/CoordinatesDisplay';
import DropDownMarker from './components/DropDownMarker';
import StartingPointMarker from './components/StartingPointMarker';
import startingPointIcon from './assets/starting-point.png';
import defaultMarker from './assets/default-marker.png';
import searchMarker from './assets/search-marker.png';

function Marker() {
  const { map } = useMap();

  const marker = useRef<MapBoxMarker | null>();
  const [isStartingPoint, setIsStartingPoint] = useState(false);
  const [coordinate, setCoordinate] = useState<LngLat>();
  const [isOpen, setIsOpen] = useState(false);
  const [markerIcon, setMarkerIcon] = useState(defaultMarker);

  const removeMarker = () => {
    if (marker.current) {
      marker.current.remove();
      marker.current = null;
    }
  };

  const createMarker = (lngLat: LngLat) => {
    removeMarker();
    marker.current = new mapboxgl.Marker()
      .setLngLat(lngLat)
      .addTo(map.current ? map.current : new mapboxgl.Map());
  };

  const changeIcon = () => {
    if (marker.current != null) {
      marker.current.getElement().innerHTML = `<img src=${markerIcon} alt='Marker Icon' class='w-5 h-12'>`;
    }
  };

  const handleMapClick = (
    event: mapboxgl.MapMouseEvent & mapboxgl.EventData
  ) => {
    const { lng, lat } = event.lngLat;
    setCoordinate(new LngLat(lng, lat));
    createMarker(new LngLat(lng, lat));
    changeIcon();
  };

  const setStartingPoint = () => {
    if (!isStartingPoint) {
      setIsStartingPoint(true);
      setMarkerIcon(searchMarker);
      map.current?.on('click', handleMapClick);
      removeMarker();
    } else {
      setIsStartingPoint(false);
      setMarkerIcon(defaultMarker);
      map.current?.off('click', handleMapClick);
      removeMarker();
    }
  };

  const removeStartingPoint = () => {
    setIsStartingPoint(false);
    removeMarker();
    setCoordinate(undefined);
    setMarkerIcon(defaultMarker);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleActionSelected = (action: string) => {
    switch (action) {
      case 'search':
        break;
      case 'selectStartLocation':
        setStartingPoint();
        break;
      case 'removeStartLocation':
        removeStartingPoint();
        break;
      case 'selectEndLocation':
        break;
      default:
        break;
    }
  };

  return (
    <>
      {isStartingPoint && coordinate && (
        <CoordinatesDisplay coordinates={coordinate} />
      )}
      <DropDownMarker
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onActionSelected={handleActionSelected}
      >
        <MarkerButton onClick={handleOpen}>
          <RoomIcon />
        </MarkerButton>
      </DropDownMarker>
    </>
  );
}

export default Marker;
