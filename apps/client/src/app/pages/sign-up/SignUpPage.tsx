import ButtonSignUp from './components/ButtonSignUp';
import SignUpInput from './components/SignUpInput';

function SignUpPage() {
  return (
    <form className='bg-[#194569] min-h-screen w-screen flex flex-col justify-center items-center '>
      <div className='text-left w-full'>
        <h1 className='text-left text-white px-16 text-2xl'>
          Personal information
        </h1>
      </div>
      <div className='w-1/2'>
        <div className='flex w-full items-center flex-wrap justify-between'>
          <SignUpInput type='string' classNameDiv='w-full md:w-1/2' id='fName'>
            First Name
          </SignUpInput>

          <SignUpInput
            type='string'
            classNameDiv='w-full md:w-1/2 md:pl-3'
            id='lName'
          >
            Last Name
          </SignUpInput>
        </div>
        <SignUpInput type='string' id='email'>
          Email
        </SignUpInput>
        <div className='flex w-full flex-col md:flex-row justify-between'>
          <SignUpInput
            classNameDiv='w-full md:w-1/2'
            type='date'
            id='birthdate'
          >
            Birthdate
          </SignUpInput>
          <SignUpInput
            type='string'
            id='country'
            classNameDiv='w-full md:w-1/2 md:pl-3'
          >
            Country
          </SignUpInput>
        </div>
      </div>
      <div className='text-left w-full'>
        <h1 className='text-left text-white px-16 text-2xl'>User data</h1>
      </div>
      <div className='space-y-6 w-1/2 items-center'>
        <div className='w-full md:w-1/2 '>
          <SignUpInput id='userName' type='string'>
            User name
          </SignUpInput>
          <SignUpInput id='password' type='Password'>
            Password
          </SignUpInput>
          <SignUpInput id='confPassword' type='Password' classNameDiv='w-full'>
            Confirm Password
          </SignUpInput>
        </div>
      </div>
      <ButtonSignUp />
    </form>
  );
}

export default SignUpPage;
