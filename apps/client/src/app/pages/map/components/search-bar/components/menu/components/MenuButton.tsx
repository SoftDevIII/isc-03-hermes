import Button from '@map-shared-components/Button';

function MenuButton({ children, onClick, addRef }: MenuButtonProps) {
  return (
    <Button
      onClick={onClick}
      className='text-white text-[25px] md:text-[30px] grid h-full place-items-center'
      addRef={addRef}
    >
      {children}
    </Button>
  );
}

export default MenuButton;
