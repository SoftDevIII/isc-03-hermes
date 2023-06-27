import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TextField from '../../map/shared-ui-components/Textfile';

function TextBoxEmail({ id, ref }: TextBoxProps) {
  return (
    <div className='flex space-x-10 p-4 justify-between border border-white  rounded bg-transparent w-full'>
      <TextField
        type='text'
        required
        placeholder='EMAIL'
        classNameDiv='bg-transparent outline-none w-1/2 sm:w-auto'
        classNameInput='bg-transparent w-10/12 border-none text-white outline-none'
        id={id}
        ref={ref}
      />
      <EmailOutlinedIcon />
    </div>
  );
}
export default TextBoxEmail;
