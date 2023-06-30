import carIcon from '@map-assets/car-icon.png';
import SelectorButton from './SelectorButton';

function CarButton({ className = '', setIsOpen, setType }: CarButtonProps) {
  const onClick = () => {
    setType('car');
    setIsOpen(false);
  };

  return (
    <SelectorButton
      alt='Car Icon'
      onClick={() => onClick()}
      icon={carIcon}
      className={`${className}`}
    />
  );
}

export default CarButton;
