import CoordinatesProvider from '@map-contexts/coordinates/CoordinatesProvider';
import MapProvider from '@map-contexts/map/MapProvider';
import { Route, Routes } from 'react-router-dom';
import MapPage from './pages/map/MapPage';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <MapProvider>
      <CoordinatesProvider>
        <Routes>
          <Route path='/map' element={<MapPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CoordinatesProvider>
    </MapProvider>
  );
}

export default App;
