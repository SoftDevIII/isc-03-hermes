import MapComponent from './components/map/MapComponent';
import MarkerMenu from './components/marker/MarkerMenu';
import Menu from './components/menu/Menu';
import PopUp from './components/pop-up/PopUp';
import SearchBar from './components/search-bar/SearchBar';
import Zoom from './components/zoom/Zoom';
import BoundsProvider from './context/bounds/BoundsProvider';
import CoordinatesProvider from './context/coordinates/CoordinatesProvider';
import MapProvider from './context/map/MapProvider';

function MapPage() {
  return (
    <div className='h-screen grid'>
      <BoundsProvider>
        <MapProvider>
          <CoordinatesProvider>
            <MapComponent />
            <SearchBar />
            <Zoom />
            <MarkerMenu />
            <PopUp />
            <Menu />
          </CoordinatesProvider>
        </MapProvider>
      </BoundsProvider>
    </div>
  );
}

export default MapPage;
