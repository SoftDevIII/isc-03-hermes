import start from '@assets/start-icon.png';
import useCoordinates from '../../../context/coordinates/CoordinatesState';
import OptionMarkerButton from './OptionMarkerButton';

function StartMarkerButton({
  setIsOpen,
  onActionSelected
}: StartMarkerButtonProps) {
  const { startCoordinates } = useCoordinates();

  const handleClick = () => {
    if (startCoordinates.lat !== 0 && startCoordinates.lng !== 0) {
      onActionSelected('removeStartMarker');
    } else {
      onActionSelected('setStartMarker');
    }
    setIsOpen(false);
  };

  return (
    <OptionMarkerButton
      title='Start'
      icon={start}
      isMarked={startCoordinates.lat !== 0 && startCoordinates.lng !== 0}
      handleClick={handleClick}
      ajustImage='mb-[0.75px]'
    />
  );
}

export default StartMarkerButton;
