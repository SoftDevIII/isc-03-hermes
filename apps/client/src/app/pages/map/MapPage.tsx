import MapComponent from '@map-components/map/MapComponent';
import SearchBar from '@map-components/search-bar/SearchBar';
import CoordinatesProvider from '@map-contexts/coordinates/CoordinatesProvider';
import MapProvider from '@map-contexts/map/MapProvider';
import MarkersProvider from '@map-contexts/markers/MarkersProvider';
import '@map-styles/marker.css';
import { useParams } from 'react-router-dom';
import LeftControl from './components/left-control/LeftControl';
import PopUpForRouteInformation from './components/left-control/route/PopUpForRouteInformation';
import RightControl from './components/right-control/RightControl';
import RouteTypeProvider from './contexts/route-selector/RouteTypeProvider';
import MapStyle from './map-style/MapStyle';

function MapPage() {
  const { long, lat } = useParams();

  return (
    <MapProvider>
      <CoordinatesProvider>
        <MarkersProvider>
          <RouteTypeProvider>
            <div className='h-full grid font-roboto'>
              <MapComponent />
              <MapStyle />
              <SearchBar long={long} lat={lat} />
              <LeftControl />
              <RightControl />
              <PopUpForRouteInformation />
            </div>
          </RouteTypeProvider>
        </MarkersProvider>
      </CoordinatesProvider>
    </MapProvider>
  );
}

export default MapPage;
