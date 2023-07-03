import Button from '@map-shared-components/Button';
import CancelIcon from '@mui/icons-material/Cancel';

function CloseButtonPlace({
  removeMarker,
  setIsOpen,
  setIsPlace
}: CloseButtonPlaceProps) {
  const handleCloseButton = () => {
    removeMarker();
    setIsOpen(false);
    setIsPlace(false);
  };

  return (
    <Button
      onClick={() => handleCloseButton()}
      className='grid absolute right-1 top-1 text-[#e69119]'
    >
      <CancelIcon fontSize='inherit' />
    </Button>
  );
}

export default CloseButtonPlace;
