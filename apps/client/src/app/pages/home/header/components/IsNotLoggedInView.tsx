import Button from '@map-shared-components/Button';

function IsNotLoggedInView() {
  const handleClick = () => {};

  return (
    <div className='flex space-x-4 text-[#CADEED] font-semibold text-sm sm:text-base'>
      <Button onClick={handleClick}>Log In</Button>
      <Button
        onClick={handleClick}
        className='rounded-xl bg-[#CADEED] p-3 text-[#1D3C66] hover:opacity-80 active:opacity-90'
      >
        Sign Up
      </Button>
    </div>
  );
}

export default IsNotLoggedInView;
