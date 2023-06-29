import walkIcon from '@map-assets/walking-icon.png';
import SelectorButton from './SelectorButton';

function WalkButton({ className = '', setIsOpen }: WalkButtonProps) {
  const onClick = () => {
    setIsOpen(false);
  };

  return (
    <SelectorButton
      alt='Walk Icon'
      handleClick={() => onClick}
      icon={walkIcon}
      className={`${className}`}
    />
  );
}

export default WalkButton;
