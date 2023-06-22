import TextField from '@map-shared-components/Textfile';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';

function TextBoxEmail() {
  return (
    <div className='flex space-x-10 p-4 border border-black rounded'>
      <TextField type='text' required placeholder='EMAIL' />
      <EmailTwoToneIcon />
    </div>
  );
}
export default TextBoxEmail;
