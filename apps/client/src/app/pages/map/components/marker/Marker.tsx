import mapboxgl, { LngLat, Marker as MapBoxMarker } from 'mapbox-gl';
import { useRef, useState } from 'react';
import useMap from '../../context/map/MapState';
import startingPointIcon from './assets/starting-point.png';
import CoordinatesDisplay from './components/CoordinatesDisplay';
import StartingPointMarker from './components/StartingPointMarker';

function Marker() {
  const { map, container } = useMap();

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

  return (
    <>
      {isStartingPoint && coordinate !== undefined && (
        <StartingPointMarker onClick={removeStartingPoint} />
      )}
      {coordinate !== undefined && (
        <CoordinatesDisplay coordinates={coordinate} />
      )}
      {!isStartingPoint && (
        <button
          className='absolute left-12 bottom-12 z-10 cursor-pointer'
          onClick={setStartingPoint}
          type='button'
        >
          <img
            src={startingPointIcon}
            alt='Starting Point'
            className='w-16 h-16'
          />
        </button>
      )}
    </>
  );
}

export default Marker;
