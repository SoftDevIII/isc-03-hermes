import xIcon from '@assets/x-icon.png';
import Button from './Button';

function ExitButton({ onClick, className }: ExitButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`rounded-full ' hover:opacity-80 active:opacity-90' ${className}`}
    >
      <img src={xIcon} alt='exit icon' draggable='false' />
    </Button>
  );
}

export default ExitButton;
