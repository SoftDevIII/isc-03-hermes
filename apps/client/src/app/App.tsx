import HomePage from '@pages/home/HomePage';
import LoginPage from '@pages/login/LoginPage';
import MapPage from '@pages/map/MapPage';
import NotFound from '@pages/not-found/NotFound';
import SignUpPage from '@pages/sign-up/SignUpPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import DisasterForm from './pages/disasterForm/disasterForm';

function App() {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Navigate to='/map' />} />
      <Route path='/map' element={<MapPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/disaster-form' element={<DisasterForm />} />
    </Routes>
  );
}

export default App;
