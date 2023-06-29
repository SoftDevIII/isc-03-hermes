import Button from '../../map/shared-ui-components/Button';
import handleSignUp from '../service/HandleSignUp';

function ButtonSignUp() {
  return (
    <div className='w-1/2 p-5'>
      <Button
        className='bg-white rounded w-full items-center'
        onClick={() => {
          handleSignUp(
            'fName',
            'lName',
            'email',
            'birthdate',
            'country',
            'userName',
            'password',
            'confPassword'
          );
        }}
      >
        Sign Up
      </Button>
    </div>
  );
}

export default ButtonSignUp;
