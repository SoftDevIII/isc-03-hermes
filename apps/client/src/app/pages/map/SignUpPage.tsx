import handleSignUp from './hooks/useSignUp';
import Button from './shared-ui-components/Button';
import LabelTextField from './shared-ui-components/LabelTextField';

function SignUpPage() {
  return (
    <div className='bg-[#194569] min-h-screen flex flex-col justify-center items-center p-4 sm:p-8'>
      <div className='text-left w-full'>
        <h1 className='text-left text-white px-16 text-2xl'>
          Personal information
        </h1>
      </div>
      <div className='w-1/2'>
        <div className='flex space-x-6 w-full'>
          <LabelTextField
            type='string'
            classNameTF='rounded w-full'
            classNameL='text-white'
            required
            id='fName'
          >
            First Name
          </LabelTextField>
          <LabelTextField
            type='string'
            classNameTF='rounded w-full'
            classNameL='text-white'
            required
            id='lName'
          >
            Last Name
          </LabelTextField>
        </div>
        <LabelTextField
          type='string'
          classNameTF='rounded w-full'
          classNameL='text-white'
          required
          id='email'
        >
          Email
        </LabelTextField>
        <div className='flex space-x-6'>
          <LabelTextField
            type='date'
            classNameTF='rounded w-full'
            classNameL='text-white'
            required
            id='birthdate'
          >
            Birthdate
          </LabelTextField>
          <LabelTextField
            type='string'
            classNameTF='rounded w-full'
            classNameL='text-white'
            required
            id='country'
          >
            Country
          </LabelTextField>
        </div>
      </div>
      <div className='text-left w-full'>
        <h1 className='text-left text-white px-16 text-2xl'>User data</h1>
      </div>{' '}
      <div className='space-y-6 w-1/2'>
        <div className='w-1/2'>
          <LabelTextField
            type='string'
            classNameTF='rounded w-full'
            classNameL='text-white'
            required
            id='userName'
          >
            User name
          </LabelTextField>
          <LabelTextField
            type='Password'
            classNameTF='rounded w-full'
            classNameL='text-white'
            required
            id='password'
          >
            Password
          </LabelTextField>
          <LabelTextField
            type='Password'
            classNameTF='rounded w-full'
            classNameL='text-white'
            required
            id='confPassword'
          >
            Confirm Password
          </LabelTextField>
        </div>
      </div>
      <div className='w-1/4 p-5'>
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
    </div>
  );
}

export default SignUpPage;
