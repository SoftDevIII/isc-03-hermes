import Button from './Button';

function ActualLocationButton({
  children,
  onClick
}: ActualLocationButtonProps) {
  return (
    <Button
      onClick={onClick}
      className='h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 active:bg-black/90 text-white'
    >
      {children}
    </Button>
  );
}

export default ActualLocationButton;