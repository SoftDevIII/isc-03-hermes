import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '../../shared-ui-components/Textfile';

function TextBoxPassword({ id }: TextBoxProps) {
  return (
    <div className='flex space-x-10 p-4 border border-white rounded bg-transparent'>
      <TextField
        type='password'
        required
        placeholder='PASSWORD'
        className='bg-transparent border-none text-white text- outline-none'
        id={id}
      />
      <LockOutlinedIcon />
    </div>
  );
}
export default TextBoxPassword;
