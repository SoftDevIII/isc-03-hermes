import carIcon from '@map-assets/car-icon.png';
import SelectorButton from './SelectorButton';

function CarButton({ className = '', setIsOpen }: CarButtonProps) {
  const onClick = () => {
    setIsOpen(false);
  };

  return (
    <SelectorButton
      alt='Car Icon'
      handleClick={() => onClick}
      icon={carIcon}
      className={`${className}`}
    />
  );
}

export default CarButton;
