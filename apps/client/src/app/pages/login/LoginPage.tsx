import Button from '@map-shared-components/Button';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextBoxEmail from './components/TextBoxEmail';
import TextBoxPassword from './components/TextBoxPassword';
import handleLogin from './service/handleLogin';

function LoginPage() {
  const [isCredentialValid, setIsCredentialValid] = useState(false);
  const [isCredentialError, setIsCredentialError] = useState(true);
  const navigate = useNavigate();
  const userCredentialHandle = async (
    email: string,
    password: string
  ): Promise<void> => {
    const postRequest: AxiosResponse = await axios.post<boolean>(
      '/api/customer',
      { email, password }
    );
    setIsCredentialValid(Boolean(postRequest.data));
  };
  useEffect(() => {
    if (isCredentialValid) {
      navigate('/map');
    }
  }, [isCredentialValid, navigate]);
  return (
    <div className='min-h-screen w-screen flex flex-wrap justify-center items-center bg-gradient-to-r from-[#194569] via-[#5F84A2] to-[#194569] p-4 font-roboto'>
      <AccountCircleOutlinedIcon style={{ fontSize: 120 }} />
      <div className='flex flex-col items-center space-y-10'>
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
            userCredentialHandle(userData.email, userData.password)
              .then(() => {
                setIsCredentialError(isCredentialValid);
              })
              .catch(error => {
                throw error;
              });
          }}
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
