import Button from '@map-shared-components/Button';
import CloseIcon from '@mui/icons-material/Close';

function CloseButton({ onClick, className }: CloseButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`rounded-full hover:opacity-80 active:opacity-90 md:text-[10px] ${className}`}
    >
      <CloseIcon className='text-white' fontSize='inherit' />
    </Button>
  );
}

export default CloseButton;
