import Button from '@map-shared-components/Button';

function MenuOptionButton({
  children,
  onClick,
  title,
  last = false
}: MenuOptionButtonProps) {
  return (
    <div
      className={`hover:bg-[#4f5d73]/20 ${
        last ? 'rounded-b-2xl py-1 portrait:md:py-3' : ''
      }`}
    >
      <Button
        onClick={onClick}
        className='w-full py-3 landscape:sm:py-2 text-start
        px-2 font-roboto grid grid-cols-5 text-white portrait:font-sm'
      >
        <div className='grid col-span-1 place-items-center h-full'>
          {children}
        </div>
        <p className='col-span-4 portrait:md:text-xl'>{title}</p>
      </Button>
    </div>
  );
}
export default MenuOptionButton;
