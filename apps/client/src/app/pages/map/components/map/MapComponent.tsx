import { LegacyRef } from 'react';
import useMap from '../../context/map/MapState';

function MapComponent() {
  const { container } = useMap();

  return (
    <div
      ref={container as LegacyRef<HTMLDivElement>}
      className='h-full w-full content-center'
    />
  );
}

export default MapComponent;
