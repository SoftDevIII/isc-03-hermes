import Button from '../../../../shared-ui-components/Button';

function TypeRouteButton({ handleClick, children }: TypeRouteButton) {
  return (
    <Button
      onClick={handleClick}
      className='w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 active:bg-black/90 text-white
      text-[30px] flex justify-center items-center sm:w-10 sm:h-10 sm:text-[24px]'
    >
      {children}
    </Button>
  );
}

export default TypeRouteButton;
