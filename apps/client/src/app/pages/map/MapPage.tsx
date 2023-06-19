import MapComponent from './components/map/MapComponent';
import Marker from './components/marker/Marker';
import Zoom from './components/zoom/Zoom';
import BoundsProvider from './context/bounds/BoundsProvider';
import MapProvider from './context/map/MapProvider';

function MapPage() {
  return (
    <div className='h-screen grid'>
      <BoundsProvider>
        <MapProvider>
          <MapComponent />
          <Zoom />
          <Marker />
        </MapProvider>
      </BoundsProvider>
    </div>
  );
}

export default MapPage;
