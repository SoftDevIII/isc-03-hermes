import useMap from '@map-contexts/map/MapState';
import { LegacyRef } from 'react';
import Loading from '../loading/Loading';

function MapComponent() {
  const { isLoading, container } = useMap();

  return (
    <div>
      {isLoading && <Loading />}
      <div
        ref={container as LegacyRef<HTMLDivElement>}
        className='absolute z-0 h-screen w-full mapContainer'
      />
    </div>
  );
}

export default MapComponent;
