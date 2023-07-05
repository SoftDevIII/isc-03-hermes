import Button from '@map-shared-components/Button';
import { useNavigate } from 'react-router-dom';

function IsNotLoggedInView() {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <div className='text-[#CADEED] font-semibold text-sm sm:text-base sm:flex grid grid-rows-2 space-x-4'>
      <Button onClick={handleLogIn}>Log In</Button>
      <Button
        onClick={handleSignUp}
        className='rounded-xl bg-[#CADEED] sm:p-3 p-2 text-[#1D3C66] hover:opacity-80 active:opacity-90'
      >
        Sign Up
      </Button>
    </div>
  );
}

export default IsNotLoggedInView;
