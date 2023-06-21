import Button from './Button';

function OptionButton({ children, onClick = () => {} }: OptionButtonProps) {
  return (
    <Button
      onClick={onClick}
      className='w-full py-[2px] rounded-3xl bg-black/50 hover:bg-black/70 active:bg-black/90 text-white'
    >
      {children}
    </Button>
  );
}
export default OptionButton;
