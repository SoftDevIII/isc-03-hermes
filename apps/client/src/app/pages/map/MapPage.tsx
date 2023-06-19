import MapComponent from './components/map/MapComponent';
import Marker from './components/marker/Marker';
import Menu from './components/menu/Menu';
import PopUp from './components/pop-up/PopUp';
import SearchBar from './components/search-bar/SearchBar';
import Zoom from './components/zoom/Zoom';
import BoundsProvider from './context/bounds/BoundsProvider';
import MapProvider from './context/map/MapProvider';

function MapPage() {
  return (
    <div className='h-screen grid'>
      <BoundsProvider>
        <MapProvider>
          <MapComponent />
          <SearchBar />
          <Zoom />
          <Marker />
          <PopUp />
          <Menu />
        </MapProvider>
      </BoundsProvider>
    </div>
  );
}

export default MapPage;
