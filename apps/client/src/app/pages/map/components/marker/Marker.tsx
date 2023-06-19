import RoomIcon from '@mui/icons-material/Room';
import mapboxgl, { LngLat, Marker as MapBoxMarker } from 'mapbox-gl';
import { useRef, useState } from 'react';
import useMap from '../../context/map/MapState';
import MarkerButton from '../../shared-ui-components/MarkerButton';
import CoordinatesDisplay from './components/CoordinatesDisplay';
import DropDownMarker from './components/DropDownMarker';

function Marker() {
  const { map } = useMap();

  const marker = useRef<MapBoxMarker | null>();
  const [isStartingPoint, setIsStartingPoint] = useState(false);
  const [coordinate, setCoordinate] = useState<LngLat>();
  const [isOpen, setIsOpen] = useState(false);

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

  const handleMapClick = (
    event: mapboxgl.MapMouseEvent & mapboxgl.EventData
  ) => {
    const { lng, lat } = event.lngLat;
    setCoordinate(new LngLat(lng, lat));
    createMarker(new LngLat(lng, lat));
  };

  const setStartingPoint = () => {
    if (!isStartingPoint) {
      setIsStartingPoint(true);
      map.current?.on('click', handleMapClick);
    } else {
      setIsStartingPoint(false);
      map.current?.off('click', handleMapClick);
      removeMarker();
    }
  };

  const removeStartingPoint = () => {
    setIsStartingPoint(false);
    removeMarker();
    setCoordinate(undefined);
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
