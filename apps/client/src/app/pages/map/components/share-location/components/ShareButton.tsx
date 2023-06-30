import Button from '@map-shared-components/Button';
import '@map-styles/share-modal.css';
import ShareIcon from '@mui/icons-material/Share';

function ShareButton({ onClick }: ShareButtonProps) {
  return (
    <>
      <Button
        onClick={onClick}
        className='h-12 w-12 rounded-full bg-black/50 text-white sm:w-10 sm:h-10 sm:text-[24px] grid place-items-center hover:bg-black/70 active:bg-black/90'
      >
        <ShareIcon />
      </Button>
    </>
  );
}

export default ShareButton;
