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
      className={`h-12 w-12 rounded-full bg-black/50 text-white sm:w-10 sm:h-10 sm:text-[24px] grid place-items-center
      ${!disabled ? 'hover:bg-black/70 active:bg-black/90' : ''}`}
    >
      {children}
    </Button>
  );
}

export default ActualLocationButton;
