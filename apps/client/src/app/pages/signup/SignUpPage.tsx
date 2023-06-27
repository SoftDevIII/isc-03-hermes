import handleSignUp from '../map/hooks/useSignUp';
import Button from '../map/shared-ui-components/Button';
import LabelTextField from '../map/shared-ui-components/LabelTextField';

function SignUpPage() {
  return (
    <div className='bg-[#194569] min-h-screen w-screen flex flex-col justify-center items-center '>
      <div className='text-left w-full'>
        <h1 className='text-left text-white px-3 text-2xl'>
          Personal information
        </h1>
      </div>
      <div className='w-1/2'>
        <div className='flex w-full items-center flex-wrap justify-between'>
          <LabelTextField
            type='string'
            classNameTFI='rounded w-full'
            classNameTFD=''
            classNameDiv='w-full md:w-1/2'
            classNameL='text-white'
            required
            id='fName'
          >
            First Name
          </LabelTextField>
          <LabelTextField
            type='string'
            classNameTFI='rounded w-full'
            classNameTFD='w-full'
            classNameDiv='w-full md:w-1/2 md:pl-3'
            classNameL='text-white'
            required
            id='lName'
          >
            Last Name
          </LabelTextField>
        </div>
        <LabelTextField
          type='string'
          classNameTFI='rounded w-full'
          classNameTFD='w-full'
          classNameL='text-white'
          required
          id='email'
        >
          Email
        </LabelTextField>
        <div className='flex w-full flex-col md:flex-row justify-between'>
          <LabelTextField
            type='date'
            classNameTFI='rounded w-full'
            classNameTFD='w-full'
            classNameL='text-white'
            classNameDiv='w-full md:w-1/2'
            required
            id='birthdate'
          >
            Birthdate
          </LabelTextField>
          <LabelTextField
            type='string'
            classNameTFI='rounded w-full'
            classNameTFD='w-full'
            classNameL='text-white'
            classNameDiv='w-full md:w-1/2 md:pl-3'
            required
            id='country'
          >
            Country
          </LabelTextField>
        </div>
      </div>
      <div className='text-left w-full'>
        <h1 className='text-left text-white px-16 text-2xl'>User data</h1>
      </div>
      <div className='space-y-6 w-1/2 items-center'>
        <div className='w-full md:w-1/2 '>
          <LabelTextField
            type='string'
            classNameTFI='rounded w-full'
            classNameTFD='w-full'
            classNameL='text-white'
            required
            id='userName'
          >
            User name
          </LabelTextField>
          <LabelTextField
            type='Password'
            classNameTFI='rounded w-full'
            classNameTFD='w-full'
            classNameL='text-white'
            required
            id='password'
          >
            Password
          </LabelTextField>
          <LabelTextField
            type='Password'
            classNameTFI='rounded w-full'
            classNameTFD='w-full'
            classNameDiv='w-full'
            classNameL='text-white'
            required
            id='confPassword'
          >
            Confirm Password
          </LabelTextField>
        </div>
      </div>
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
    </div>
  );
}

export default SignUpPage;
