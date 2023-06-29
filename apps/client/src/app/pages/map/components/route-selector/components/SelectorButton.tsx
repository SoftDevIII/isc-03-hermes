import Button from '../../../shared-ui-components/Button';

function SelectorButton({
  icon,
  alt,
  handleClick,
  ajustImage = '',
  className = ''
}: SelectorButtonProps) {
  return (
    <Button
      className={`bg-black rounded-full ' hover:opacity-80 active:opacity-90 z-10 ${ajustImage} ${className}`}
      onClick={() => handleClick}
    >
      <img src={icon} alt={alt} />
    </Button>
  );
}

export default SelectorButton;
