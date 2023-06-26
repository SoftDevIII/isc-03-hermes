import Button from '@map-shared-components/Button';

function MarkerButton({ children, onClick }: MarkerButtonProps) {
  return (
    <Button
      onClick={onClick}
      className='w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 active:bg-black/90 text-white
      text-[30px] flex justify-center items-center'
    >
      {children}
    </Button>
  );
}

export default MarkerButton;
