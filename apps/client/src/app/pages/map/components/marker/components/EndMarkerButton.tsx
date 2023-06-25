import destination from '@map-assets/destination-icon.png';
import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import OptionMarkerButton from './OptionMarkerButton';

function EndMarkerButton({
  setIsOpen,
  onActionSelected
}: EndMarkerButtonProps) {
  const { endCoordinates } = useCoordinates();

  const handleClick = () => {
    if (endCoordinates.lat !== 0 && endCoordinates.lng !== 0) {
      onActionSelected('removeEndMarker');
    } else {
      onActionSelected('setEndMarker');
    }
    setIsOpen(false);
  };

  return (
    <OptionMarkerButton
      title='End'
      icon={destination}
      isMarked={endCoordinates.lat !== 0 && endCoordinates.lng !== 0}
      handleClick={handleClick}
      ajustImage='mr-[0.75px] mt-[0.25px]'
    />
  );
}

export default EndMarkerButton;
