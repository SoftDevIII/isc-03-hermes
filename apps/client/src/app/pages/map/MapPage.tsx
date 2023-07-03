import ActualLocation from '@map-components/actual-location/ActualLocation';
import MapComponent from '@map-components/map/MapComponent';
import MarkerMenu from '@map-components/marker/MarkerMenu';
import SearchBar from '@map-components/search-bar/SearchBar';
import Zoom from '@map-components/zoom/Zoom';
import CoordinatesProvider from '@map-contexts/coordinates/CoordinatesProvider';
import MapProvider from '@map-contexts/map/MapProvider';
import MapStyle from './map-style/MapStyle';

function MapPage() {
  return (
    <MapProvider>
      <CoordinatesProvider>
        <div className='h-screen grid font-roboto'>
          <MapComponent />
          <SearchBar />
          <MarkerMenu />
          <MapStyle />
          <ActualLocation />
          <Zoom />
        </div>
      </CoordinatesProvider>
    </MapProvider>
  );
}

export default MapPage;
