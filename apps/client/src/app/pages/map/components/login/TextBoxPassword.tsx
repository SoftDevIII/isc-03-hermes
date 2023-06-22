import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import TextField from '../../shared-ui-components/Textfile';

function TextBoxPassword() {
  return (
    <div className='flex space-x-10 p-4 border border-black rounded'>
      <TextField type='password' required placeholder='PASSWORD' />
      <LockTwoToneIcon />
    </div>
  );
}
export default TextBoxPassword;
