import ExitButton from '../../left-control/marker/components/ExitButton';
import BicycleButton from './BicycleButton';
import CarButton from './CarButton';
import WalkButton from './WalkButton';

function RouteSelectorList({
  setIsOpen,
  isOpen,
  setType
}: RouteSelectorListProps) {
  return (
    <section className='absolute rounded-3xl bg-black/30 p-5 bottom-9 left-7 mb-2'>
      <ExitButton
        className='absolute right-[15px] top-[9px] h-[18px] w-[18px] opacity-70'
        onClick={() => setIsOpen(!isOpen)}
      />
      <li className='flex flex-col gap-2 mt-1 mr-1'>
        <BicycleButton setIsOpen={setIsOpen} setType={setType} />
        <WalkButton setIsOpen={setIsOpen} setType={setType} />
        <CarButton setIsOpen={setIsOpen} setType={setType} />
      </li>
    </section>
  );
}

export default RouteSelectorList;
