import MapComponent from '@map-components/map/MapComponent';
import SearchBar from '@map-components/search-bar/SearchBar';
import CoordinatesProvider from '@map-contexts/coordinates/CoordinatesProvider';
import MapProvider from '@map-contexts/map/MapProvider';
import MarkersProvider from '@map-contexts/markers/MarkersProvider';
import '@map-styles/marker.css';
import LeftControl from './components/left-control/LeftControl';
import RightControl from './components/right-control/RightControl';

function MapPage() {
  return (
    <MapProvider>
      <CoordinatesProvider>
        <MarkersProvider>
          <div className='h-full grid font-roboto'>
            <MapComponent />
            <SearchBar />
            <LeftControl />
            <RightControl />
          </div>
        </MarkersProvider>
      </CoordinatesProvider>
    </MapProvider>
  );
}

export default MapPage;
