import ActualLocation from '@map-components/actual-location/ActualLocation';
import MapComponent from '@map-components/map/MapComponent';
import MarkerMenu from '@map-components/marker/MarkerMenu';
import SearchBar from '@map-components/search-bar/SearchBar';
import Zoom from '@map-components/zoom/Zoom';

function MapPage() {
  return (
    <div className='h-screen grid'>
      <MapComponent />
      <SearchBar />
      <MarkerMenu />
      <Zoom />
      <ActualLocation />
    </div>
  );
}

export default MapPage;
