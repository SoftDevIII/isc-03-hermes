import bicycleIcon from '@map-assets/bicycle-icon.png';
import SelectorButton from './SelectorButton';

function BicycleButton({ className = '', setIsOpen }: BicycleButtonProps) {
  const onClick = () => {
    setIsOpen(false);
  };

  return (
    <SelectorButton
      alt='Bicycle Icon'
      handleClick={() => onClick}
      icon={bicycleIcon}
      className={`${className}`}
    />
  );
}

export default BicycleButton;
