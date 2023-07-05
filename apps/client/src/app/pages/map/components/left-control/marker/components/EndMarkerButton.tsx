import destination from '@map-assets/destination-icon.png';
import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import OptionMarkerButton from './OptionMarkerButton';

function EndMarkerButton({
  setIsOpen,
  onActionSelected
}: EndMarkerButtonProps) {
  const { endCoordinates } = useCoordinates();

  const handleClick = () => {
    if (endCoordinates !== null) {
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
      isMarked={endCoordinates !== null}
      handleClick={handleClick}
      ajustImage='mr-[0.75px] mt-[0.25px]'
    />
  );
}

export default EndMarkerButton;
