import MapProvider from './context/MapProvider';
import MapContainer from './map-container/MapContainer';
import Marker from './marker/Marker';

function Map() {
  return (
    <MapProvider>
      <MapContainer />
      <Marker />
    </MapProvider>
  );
}

export default Map;
