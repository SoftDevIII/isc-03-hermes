import { Navigate, Route, Routes } from 'react-router-dom';
import MapPage from './pages/map/MapPage';
import NotFound from './pages/not-found/NotFound';
import LoginPage from './pages/map/LoginPage';

function App() {
  return (
    <Routes>
      <Route path='/map' element={<MapPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<Navigate to='/map' />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
