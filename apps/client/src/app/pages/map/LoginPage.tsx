import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TextBoxEmail from './components/login/TextBoxEmail';
import TextBoxPassword from './components/login/TextBoxPassword';
import useMenuActions from './hooks/useMenuActions';
import Button from './shared-ui-components/Button';

function LoginPage() {
  const { handleActionSelected } = useMenuActions();
  const [isCredentialValid, setIsCredentialValid] = useState(false);
  const [isCredentialError, setIsCredentialError] = useState(true);
  const navigate = useNavigate();
  const userCredentialHandle = async (
    email: string,
    password: string
  ): Promise<void> => {
    let postRequest: AxiosResponse;
    try {
      postRequest = await axios.post('/api/customer', { email, password });
      setIsCredentialValid(Boolean(postRequest.data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('POST request failed:', error);
    }
  };
  useEffect(() => {
    if (isCredentialValid) {
      navigate('/map');
    }
  }, [isCredentialValid, navigate]);
  return (
    <div className='flex flex-col space-y-10 border items-center bg bg-gradient-to-r from-[#194569] via-[#5F84A2] to-[#194569] p-4 md:w-1/2 lg:w-1/3 xl:w-1/4'>
      <AccountCircleOutlinedIcon style={{ fontSize: 120 }} />
      <div className='flex flex-col space-y-10'>
        {!isCredentialError && (
          <h1
            className='text-left text-white bg-red-500'
            hidden={isCredentialError}
          >
            Invalid access. Please try again.
          </h1>
        )}
        <TextBoxEmail id='emailRef' />
        <TextBoxPassword id='passwordRef' />
        <Button
          className='bottom-0 bg-[#194569] text-white w-full p-4 text-1xl'
          onClick={() => {
            const userData = handleLogin('emailRef', 'passwordRef');
            userCredentialHandle(userData.email, userData.password).catch(
              error => {
                // eslint-disable-next-line no-console
                console.error('POST request failed:', error);
              }
            );
            setIsCredentialError(isCredentialValid);
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
