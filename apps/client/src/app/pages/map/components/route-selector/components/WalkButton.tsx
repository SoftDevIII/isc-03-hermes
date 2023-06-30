import walkIcon from '@map-assets/walking-icon.png';
import SelectorButton from './SelectorButton';

function WalkButton({ className = '', setIsOpen, setType }: WalkButtonProps) {
  const onClick = () => {
    setType('walk');
    setIsOpen(false);
  };

  return (
    <SelectorButton
      alt='Walk Icon'
      onClick={() => onClick()}
      icon={walkIcon}
      className={`${className}`}
    />
  );
}

export default WalkButton;
