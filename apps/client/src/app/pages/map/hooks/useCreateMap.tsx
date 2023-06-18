import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';
import createMap from '../services/MapService';

function useCreateMap() {
  const map = useRef<MapType['map']>();
  const container = useRef<MapType['container']>();

  useEffect(() => {
    map.current = createMap({ container });
  }, []);

  return { map, container };
}

export default useCreateMap;
