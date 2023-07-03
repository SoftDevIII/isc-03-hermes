import Button from '@map-shared-components/Button';
import CancelIcon from '@mui/icons-material/Cancel';

function CloseButtonContext({
  removeMarker,
  setIsOpen
}: CloseButtonContextProps) {
  const handleCloseButton = () => {
    removeMarker();
    setIsOpen(false);
  };

  return (
    <Button
      onClick={() => handleCloseButton()}
      className='grid absolute right-1 top-1'
    >
      <CancelIcon fontSize='inherit' />
    </Button>
  );
}

export default CloseButtonContext;
