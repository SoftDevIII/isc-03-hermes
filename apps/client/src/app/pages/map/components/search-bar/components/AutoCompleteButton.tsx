import Button from '@map-shared-components/Button';

function AutoCompleteButton({ children, onClick }: AutoCompleteButtonProps) {
  return (
    <Button
      className='w-full bg-black/25 text-white text-lg rounded-lg'
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default AutoCompleteButton;
