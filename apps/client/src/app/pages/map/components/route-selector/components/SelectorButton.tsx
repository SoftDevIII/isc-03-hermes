import Button from '../../../shared-ui-components/Button';

function SelectorButton({
  icon,
  alt,
  onClick,
  ajustImage = '',
  className = ''
}: SelectorButtonProps) {
  return (
    <Button
      className={`bg-black rounded-full ' hover:opacity-80 active:opacity-90 z-10 w-10 h-10 p-2 ${ajustImage} ${className}`}
      onClick={() => onClick()}
    >
      <img src={icon} alt={alt} />
    </Button>
  );
}

export default SelectorButton;
