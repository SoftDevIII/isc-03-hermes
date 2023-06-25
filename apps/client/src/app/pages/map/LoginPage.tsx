import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import TextBoxEmail from './components/login/TextBoxEmail';
import TextBoxPassword from './components/login/TextBoxPassword';
import useMenuActions from './hooks/useMenuActions';
import Button from './shared-ui-components/Button';

function LoginPage() {
  const { handleActionSelected } = useMenuActions();
  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(true);
  const handleButtonClick = async (
    email: string,
    password: string
  ): Promise<void> => {
    let postRequest: AxiosResponse;
    try {
      postRequest = await axios.post('/api/customer', { email, password });
      setIsValid(Boolean(postRequest.data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('POST request failed:', error);
    }
  };
  return (
    <div className='flex flex-col space-y-10 border items-center bg bg-gradient-to-r from-[#194569] via-[#5F84A2] to-[#194569] p-4 md:w-1/2 lg:w-1/3 xl:w-1/4'>
      <AccountCircleOutlinedIcon style={{ fontSize: 120 }} />
      <div className='flex flex-col space-y-10'>
        {!isError && (
          <p hidden={isError}>
            Acceso inválido. Por favor, inténtelo otra vez.
          </p>
        )}
        <TextBoxEmail id='emailRef' />
        <TextBoxPassword id='passwordRef' />
        <Button
          className='bottom-0 bg-[#194569] text-white w-full p-4 text-1xl'
          onClick={() => {
            const userData = handleLogin('emailRef', 'passwordRef');
            handleButtonClick(userData.email, userData.password).catch(
              error => {
                // eslint-disable-next-line no-console
                console.error('POST request failed:', error);
              }
            );
            setIsError(isValid);
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
