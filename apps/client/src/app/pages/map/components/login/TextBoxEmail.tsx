import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import TextField from '../../shared-ui-components/Textfile';

function TextBoxEmail() {
  return (
    <div className='flex space-x-10 p-4 border border-black rounded'>
      <TextField type='text' required placeholder='EMAIL' />
      <EmailTwoToneIcon />
    </div>
  );
}

export default TextBoxEmail;
