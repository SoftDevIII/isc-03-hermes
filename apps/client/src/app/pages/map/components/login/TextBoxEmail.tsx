import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TextField from '../../shared-ui-components/Textfile';

function TextBoxEmail() {
  return (
    <div className='flex space-x-10 p-4 border border-white rounded bg-transparent'>
      <TextField
        type='text'
        required
        placeholder='EMAIL'
        className='bg-transparent border-none text-white  outline-none'
      />
      <EmailOutlinedIcon />
    </div>
  );
}
export default TextBoxEmail;
