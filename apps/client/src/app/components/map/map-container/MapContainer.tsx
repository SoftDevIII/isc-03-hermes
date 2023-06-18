import useMap from '../context/MapState';

function MapContainer() {
  const { mapContainer } = useMap();

  return (
    <div
      ref={mapContainer as React.LegacyRef<HTMLDivElement>}
      className='h-full w-full content-center'
    />
  );
}

export default MapContainer;
