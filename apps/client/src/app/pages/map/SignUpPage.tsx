import useMenuActions from './hooks/useMenuActions';
import Button from './shared-ui-components/Button';
import LabelTextField from './shared-ui-components/LabelTextField';

function SignUpPage() {
  const { handleActionSelected } = useMenuActions();
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
          >
            First Name
          </LabelTextField>
          <LabelTextField
            type='string'
            classNameTF='rounded w-full'
            classNameL='text-white'
            required
          >
            Last Name
          </LabelTextField>
        </div>
        <LabelTextField
          type='string'
          classNameTF='rounded w-full'
          classNameL='text-white'
          required
        >
          Email
        </LabelTextField>
        <div className='flex space-x-6'>
          <LabelTextField
            type='string'
            classNameTF='rounded w-full'
            classNameL='text-white'
            required
          >
            Birthdate
          </LabelTextField>
          <LabelTextField
            type='string'
            classNameTF='rounded w-full'
            classNameL='text-white'
            required
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
          >
            User name
          </LabelTextField>
          <LabelTextField
            type='Password'
            classNameTF='rounded w-full'
            classNameL='text-white'
            required
          >
            Password
          </LabelTextField>
          <LabelTextField
            type='Password'
            classNameTF='rounded w-full'
            classNameL='text-white'
            required
          >
            Confirm Password
          </LabelTextField>
        </div>
      </div>
      <div className='w-1/4 p-5'>
        <Button
          className='bg-white rounded w-full items-center'
          onClick={() => {
            handleActionSelected('a');
          }}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default SignUpPage;
