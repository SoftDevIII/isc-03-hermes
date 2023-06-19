import mapboxgl, { LngLat, Marker as MapBoxMarker } from 'mapbox-gl';
import { useRef, useState } from 'react';
import useMap from '../../context/MapState';
import DropdownMenu from './components/DropdownMenu';

function Marker() {
  const { map } = useMap();

  const marker = useRef<MapBoxMarker | null>();
  const [coordinate, setCoordinate] = useState<LngLat>();
  const [isStartingPoint, setIsStartingPoint] = useState(false);

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
    <div className='absolute left-12 bottom-80 z-10 cursor-pointer'>
      <DropdownMenu onActionSelected={handleActionSelected} />
    </div>
  );
}

export default Marker;
