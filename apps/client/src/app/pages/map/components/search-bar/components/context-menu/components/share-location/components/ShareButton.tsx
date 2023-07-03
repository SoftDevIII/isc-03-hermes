import Button from '@map-shared-components/Button';
import ShareIcon from '@mui/icons-material/Share';

function ShareButton({ onClick }: ShareButtonProps) {
  return (
    <Button
      onClick={onClick}
      className='rounded-full grid text-[20px] text-[#258383]'
    >
      <ShareIcon fontSize='inherit' />
    </Button>
  );
}

export default ShareButton;
