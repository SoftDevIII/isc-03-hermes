import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '../shared-ui-components/Textfile';

function TextBoxPassword({ id, ref }: TextBoxProps) {
  return (
    <div className='flex justify-between space-x-10 p-4 border border-white  rounded bg-transparent w-full'>
      <TextField
        type='password'
        required
        placeholder='PASSWORD'
        classNameDiv='bg-transparent outline-none w-1/2 sm:w-auto'
        classNameInput='bg-transparent w-10/12 border-none text-white outline-none'
        id={id}
        ref={ref}
      />
      <LockOutlinedIcon />
    </div>
  );
}
export default TextBoxPassword;
