import EndMarkerButton from './EndMarkerButton';
import ExitButton from './ExitButton';
import StartMarkerButton from './StartMarkerButton';

function MarkerMenuList({
  setIsOpen,
  isOpen,
  onActionSelected
}: MarkerMenuListProps) {
  return (
    <section className='absolute rounded-3xl bg-black/30 p-5 bottom-9 left-7 mb-2'>
      <ExitButton
        className='absolute right-[15px] top-[9px] h-[18px] w-[18px] opacity-70'
        onClick={() => setIsOpen(!isOpen)}
      />
      <li className='flex flex-col gap-2 mt-1 mr-1'>
        <StartMarkerButton
          onActionSelected={onActionSelected}
          setIsOpen={setIsOpen}
        />
        <EndMarkerButton
          onActionSelected={onActionSelected}
          setIsOpen={setIsOpen}
        />
      </li>
    </section>
  );
}

export default MarkerMenuList;
