import Button from '@map-shared-components/Button';
import ShareIcon from '@mui/icons-material/Share';

function ShareButton({ onClick }: ShareButtonProps) {
  return (
    <Button
      onClick={onClick}
      className='rounded-full text-white grid text-[20px]'
    >
      <ShareIcon fontSize='inherit' />
    </Button>
  );
}

export default ShareButton;
