import Button from '@map-shared-components/Button';

function OptionButton({
  children,
  onClick,
  title,
  last = false
}: OptionButtonProps) {
  return (
    <div className={`hover:bg-[#4f5d73]/20 ${last ? 'rounded-b-2xl' : ''}`}>
      <Button
        onClick={onClick}
        className='w-full py-3 rounded-3x text-lg text-start
        px-5 font-roboto grid grid-cols-5'
      >
        <div className='text-[25px] grid col-span-1 place-items-center h-full'>
          {children}
        </div>
        <p className='col-span-4 ml-2 px-2'>{title}</p>
      </Button>
    </div>
  );
}
export default OptionButton;
