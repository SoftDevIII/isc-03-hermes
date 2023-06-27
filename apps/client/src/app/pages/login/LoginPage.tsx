import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
<<<<<<< HEAD
import Button from '@map-shared-components/Button';
import TextBoxEmail from './components/TextBoxEmail';
import TextBoxPassword from './components/TextBoxPassword';
import handleLogin from './service/handleLogin';

function LoginPage() {
  return (
    <div className='min-h-screen w-screen flex flex-wrap justify-center items-center bg-gradient-to-r from-[#194569] via-[#5F84A2] to-[#194569] p-4'>
=======
import handleLogin from '../map/hooks/useHandleLogin';
import Button from '../map/shared-ui-components/Button';
import TextBoxEmail from './components/TextBoxEmail';
import TextBoxPassword from './components/TextBoxPassword';

function LoginPage() {
  return (
    <div className='flex flex-wrap mx-3 h-screen w-full justify-center font-roboto items-center bg-gradient-to-r from-[#194569] via-[#5F84A2] to-[#194569] p-4'>
>>>>>>> 525d4bc (fix: solution to comment problems)
      <AccountCircleOutlinedIcon style={{ fontSize: 120 }} />
      <div className='flex flex-col items-center space-y-10'>
        <TextBoxEmail id='emailRef' />
        <TextBoxPassword id='passwordRef' />
        <Button
          className='bottom-0 bg-[#194569] text-white w-full p-4 text-1xl'
          onClick={() => {
            handleLogin('emailRef', 'passwordRef');
          }}
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
