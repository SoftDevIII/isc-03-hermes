import { Navigate, Route, Routes } from 'react-router-dom';
import DisasterForm from './pages/disasterForm/DisasterForm';
import LoginPage from './pages/login/LoginPage';
import MapPage from './pages/map/MapPage';
import NotFound from './pages/not-found/NotFound';
import SignUpPage from './pages/signup/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Navigate to='/map' />} />
      <Route path='/map' element={<MapPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/disasterForm' element={<DisasterForm />} />
    </Routes>
  );
}

export default App;
