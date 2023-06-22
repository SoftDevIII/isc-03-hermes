import ActualLocation from '@map-components/actual-location/ActualLocation';
import MapComponent from '@map-components/map/MapComponent';
import MarkerMenu from '@map-components/marker/MarkerMenu';
import SearchBar from '@map-components/search-bar/SearchBar';
import Zoom from '@map-components/zoom/Zoom';
import CoordinatesProvider from '@map-contexts/coordinates/CoordinatesProvider';
import MapProvider from '@map-contexts/map/MapProvider';

function MapPage() {
  return (
    <BoundsProvider>
      <MapProvider>
        <CoordinatesProvider>
          <div className='h-screen grid'>
            <MapComponent />
            <SearchBar />
            <ActualLocation />
            <Zoom />
            <MarkerMenu />
            <PopUp />
            <Menu />
          </div>
        </CoordinatesProvider>
      </MapProvider>
    </BoundsProvider>
  );
}

export default MapPage;
