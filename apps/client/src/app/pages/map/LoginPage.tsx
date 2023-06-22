import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextBoxEmail from './components/login/TextBoxEmail';
import TextBoxPassword from './components/login/TextBoxPassword';
import useMenuActions from './hooks/useMenuActions';
import Button from './shared-ui-components/Button';

function LoginPage() {
  const { handleActionSelected } = useMenuActions();

  return (
    <div className='flex flex-col space-y-10 border items-center bg bg-gradient-to-r from-[#194569] via-[#5F84A2] to-[#194569] p-4 md:w-1/2 lg:w-1/3 xl:w-1/4'>
      <AccountCircleOutlinedIcon style={{ fontSize: 120 }} />
      <div className='flex flex-col space-y-10'>
        <TextBoxEmail />
        <TextBoxPassword />
        <Button
          className='bottom-0 bg-[#194569] text-white w-full p-4 text-1xl'
          onClick={() => {
            handleActionSelected('a');
          }}
        >
          LOGIN
        </Button>
        <div className='flex w-full'>
          <h1 className='text-left text-white'>Forgot password?</h1>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
