import ActualLocation from './components/actual-location/ActualLocation';
import MapComponent from './components/map/MapComponent';
import MarkerMenu from './components/marker-menu/MarkerMenu';
import Menu from './components/menu/Menu';
import SearchBar from './components/search-bar/SearchBar';
import Zoom from './components/zoom/Zoom';
import CoordinatesProvider from './context/coordinates/CoordinatesProvider';
import MapProvider from './context/map/MapProvider';

function MapPage() {
  return (
    <MapProvider>
      <CoordinatesProvider>
        <div className='h-screen grid'>
          <MapComponent />
          <SearchBar />
          <ActualLocation />
          <Zoom />
          <MarkerMenu />
          <Menu />
        </div>
      </CoordinatesProvider>
    </MapProvider>
  );
}

export default MapPage;
