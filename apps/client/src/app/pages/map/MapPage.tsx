import MapComponent from './components/map/MapComponent';
import Marker from './components/marker/Marker';
import MapProvider from './context/MapProvider';

function MapPage() {
  return (
    <div className='h-screen grid'>
      <MapProvider>
        <MapComponent />
        <Marker />
      </MapProvider>
    </div>
  );
}

export default MapPage;
