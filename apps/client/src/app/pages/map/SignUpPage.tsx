import useMenuActions from './hooks/useMenuActions';
import Button from './shared-ui-components/Button';
import LabelTextField from './shared-ui-components/LabelTextField';

function SignUpPage() {
  const { handleActionSelected } = useMenuActions();
  return (
    <div className=''>
      <div className=''>
        <h1 className=''>Personal information</h1>
      </div>
      <div className=''>
        <div className=''>
          <LabelTextField type='string' classNameTF='' classNameL='' required>
            First Name
          </LabelTextField>
          <LabelTextField type='string' classNameTF='' classNameL='' required>
            Last Name
          </LabelTextField>
        </div>
        <LabelTextField type='string' classNameTF='' classNameL='' required>
          Email
        </LabelTextField>
        <div className=''>
          <LabelTextField type='string' classNameTF='' classNameL='' required>
            Birthdate
          </LabelTextField>
          <LabelTextField type='string' classNameTF='' classNameL='' required>
            Country
          </LabelTextField>
        </div>
      </div>
      <div className=''>
        <h1 className=''>User data</h1>
      </div>{' '}
      <div className=''>
        <div className=''>
          <LabelTextField type='string' classNameTF='' classNameL='' required>
            User name
          </LabelTextField>
          <LabelTextField type='' classNameTF='' classNameL='' required>
            Password
          </LabelTextField>
          <LabelTextField type='' classNameTF='' classNameL='' required>
            Confirm Password
          </LabelTextField>
        </div>
      </div>
      <div className=''>
        <Button
          className=''
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
