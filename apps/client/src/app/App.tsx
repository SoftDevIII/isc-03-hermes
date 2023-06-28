import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
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
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
}

export default App;
