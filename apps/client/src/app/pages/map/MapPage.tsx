import ActualLocation from './components/actual-location/ActualLocation';
import MapComponent from './components/map/MapComponent';
import MarkerMenu from './components/marker-menu/MarkerMenu';
import Menu from './components/menu/Menu';
import PopUp from './components/pop-up/PopUp';
import SearchBar from './components/search-bar/SearchBar';
import Zoom from './components/zoom/Zoom';
import BoundsProvider from './context/bounds/BoundsProvider';
import CoordinatesProvider from './context/coordinates/CoordinatesProvider';
import MapProvider from './context/map/MapProvider';

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
