import useMap from '@map-contexts/map/MapState';
import { LegacyRef } from 'react';

function MapComponent() {
  const { container } = useMap();

  return (
    <div
      ref={container as LegacyRef<HTMLDivElement>}
      className='h-full w-full content-center mapContainer'
    />
  );
}

export default MapComponent;
