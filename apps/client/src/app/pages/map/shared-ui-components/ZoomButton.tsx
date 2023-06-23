import Button from './Button';

function ZoomButton({ children, onClick, disabled }: ZoomButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`h-12 w-12 rounded-full bg-black/50 text-white
      ${disabled ? '' : 'hover:bg-black/70 active:bg-black/90'}`}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default ZoomButton;
