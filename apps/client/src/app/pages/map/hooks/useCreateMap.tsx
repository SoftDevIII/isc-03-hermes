import 'mapbox-gl/dist/mapbox-gl.css';
import { useCallback, useEffect, useRef } from 'react';
import useBounds from '../context/bounds/BoundsState';
import { configureMap, createMap } from '../services/MapService';

function useCreateMap() {
  const { isOutBounds, setIsOutBounds } = useBounds();
  const map = useRef<MapType['map']>();
  const container = useRef<MapType['container']>();

  const zoomBoundsHandler = useCallback(() => {
    if (!map.current) {
      return;
    }
    if (
      (map.current.getZoom() === map.current.getMinZoom() ||
        map.current.getZoom() === map.current.getMaxZoom()) &&
      !isOutBounds
    ) {
      setIsOutBounds(true);
    }
  }, [isOutBounds, setIsOutBounds]);

  useEffect(() => {
    if (map.current) {
      return;
    }

    map.current = createMap({ container });
    configureMap({ current: map.current });

    map.current?.on('zoom', zoomBoundsHandler);
  }, [zoomBoundsHandler]);

  return { map, container };
}

export default useCreateMap;
