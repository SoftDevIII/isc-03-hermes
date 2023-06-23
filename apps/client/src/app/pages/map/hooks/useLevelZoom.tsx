import { useEffect, useState } from 'react';
import useMap from '../context/map/MapState';

import { MAX_ZOOM, MIN_ZOOM } from '../utils/constants';

function useActualZoom() {
  const { map } = useMap();
  const [actualZoom, setActualZoom] = useState<number>(50);

  useEffect(() => {
    if (!map?.current) return () => {};

    const mapInstance = map.current;

    const handleZoomChange = () => {
      const zoom = mapInstance.getZoom();
      if (typeof zoom === 'number') {
        const percentage = Math.round(
          ((zoom - MIN_ZOOM) / (MAX_ZOOM - MIN_ZOOM)) * 100
        );
        setActualZoom(percentage);
      }
    };

    mapInstance.on('zoom', handleZoomChange);

    const cleanup = () => {
      mapInstance.off('zoom', handleZoomChange);
    };

    return () => {
      cleanup();
    };
  }, [map]);

  return actualZoom;
}

export default useActualZoom;
