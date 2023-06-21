import destination from '@assets/destination-icon.png';
import start from '@assets/start-icon.png';
import { useState } from 'react';
import ExitButton from '../../../shared-ui-components/ExitButton';
import OptionMarkerButton from './OptionMarkerButton';

function MenuList({ setIsOpen, isOpen }: MenuListProps) {
  const [disable, setDisable] = useState(true);

  return (
    <section className='absolute rounded-3xl bg-black/30 p-5 bottom-9 left-7 mb-2'>
      <ExitButton
        className='absolute right-[10px] top-[10px] h-[15px] w-[15px] opacity-70'
        onClick={() => setIsOpen(!isOpen)}
      />
      <li className='flex flex-col gap-2 mt-1 mr-1'>
        <OptionMarkerButton
          title='Start'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          icon={start}
          onClick={() => setIsOpen(!isOpen)}
          ajustImage='mb-[0.75px]'
          disabled={disable}
        />
        <OptionMarkerButton
          title='End'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          icon={destination}
          onClick={() => setDisable(!disable)}
          ajustImage='mr-[0.75px] mt-[0.25px]'
          disabled={false}
        />
      </li>
    </section>
  );
}

export default MenuList;
