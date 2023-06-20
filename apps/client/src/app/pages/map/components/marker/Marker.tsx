import RoomIcon from '@mui/icons-material/Room';
import mapboxgl, { LngLat, Marker as MapBoxMarker } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
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
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    if (isStartingPoint) {
      setHover('url(../../../../../../public/hover-icon.png), auto');
    } else {
      setHover(null);
    }
  }, [isStartingPoint]);

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
      <div
	      className='absolute inset-0 z-50 opacity-50'
        style={{ cursor: hover }}>
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
      </div>
    </>
  );
}

export default Marker;
