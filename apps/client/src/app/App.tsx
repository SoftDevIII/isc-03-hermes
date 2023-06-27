import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import MapPage from './pages/map/MapPage';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Navigate to='/map' />} />
      <Route path='/map' element={<MapPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default App;
