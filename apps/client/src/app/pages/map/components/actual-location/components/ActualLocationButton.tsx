import Button from '@map-shared-components/Button';

function ActualLocationButton({
  children,
  disabled,
  onClick
}: ActualLocationButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`h-12 w-12 rounded-full bg-black/50  text-white
      ${!disabled ? 'hover:bg-black/70 active:bg-black/90' : ''}`}
    >
      {children}
    </Button>
  );
}

export default ActualLocationButton;
