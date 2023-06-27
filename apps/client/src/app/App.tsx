import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import MapPage from './pages/map/MapPage';
import SignUpPage from './pages/signup/SignUpPage';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Navigate to='/map' />} />
      <Route path='/map' element={<MapPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
