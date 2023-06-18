import MapProvider from './context/MapProvider';
import MapContainer from './map-container/MapContainer';

function Map() {
  return (
    <MapProvider>
      <MapContainer />
    </MapProvider>
  );
}

export default Map;
