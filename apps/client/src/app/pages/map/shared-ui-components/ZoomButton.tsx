import Button from './Button';

function ZoomButton({ children, onClick }: ZoomButtonProps) {
  return (
    <Button
      onClick={onClick}
      className='h-12 w-12 rounded-full bg-black/70 material-symbols-outlined hover:bg-black/90 active:bg-black/70'
    >
      {children}
    </Button>
  );
}

export default ZoomButton;
