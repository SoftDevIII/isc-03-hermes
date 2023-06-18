import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';
import { configureMap, createMap } from '../services/MapService';

function useCreateMap() {
  const map = useRef<MapType['map']>();
  const container = useRef<MapType['container']>();

  useEffect(() => {
    if (map.current) {
      return;
    }

    map.current = createMap({ container });
    configureMap({ current: map.current });
  }, []);

  return { map, container };
}

export default useCreateMap;
