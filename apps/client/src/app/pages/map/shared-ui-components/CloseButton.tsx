import CloseIcon from '@mui/icons-material/Close';
import Button from './Button';

function CloseButton({ onClick, className }: CloseButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`rounded-full hover:opacity-80 active:opacity-90 ${className}`}
    >
      <CloseIcon className='text-white' fontSize='inherit' />
    </Button>
  );
}

export default CloseButton;
