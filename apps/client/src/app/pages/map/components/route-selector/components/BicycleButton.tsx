import bicycleIcon from '@map-assets/bicycle-icon.png';
import SelectorButton from './SelectorButton';

function BicycleButton({
  className = '',
  setIsOpen,
  setType
}: BicycleButtonProps) {
  const onClick = () => {
    setType('bicycle');
    setIsOpen(false);
  };

  return (
    <SelectorButton
      alt='Bicycle Icon'
      onClick={() => onClick()}
      icon={bicycleIcon}
      className={`${className}`}
    />
  );
}

export default BicycleButton;
