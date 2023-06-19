import { useState } from 'react';
import startingPointIcon from '../assets/starting-point.png';

interface DropdownMenuProps {
  onActionSelected: (action: string) => void;
}

function DropdownMenu({ onActionSelected }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleActionSelected(action: string) {
    onActionSelected(action);
    setIsOpen(false);
  }

  return (
    <div className='dropdown-menu'>
      <button
        className='inline-flex flex-shrink-0 justify-center items-center gap-2 h-[3.875rem] w-[3.875rem] rounded-md border border-transparent font-semibold  text-black'
        onClick={handleToggle}
        type='button'
      >
        <img src={startingPointIcon} alt='startingPointIcon' />
      </button>
      {isOpen && (
        <div className='absolute left-0 z-10 mt-2 w-56 rounded-3xl bg-gray-900 flex flex-col gap-2 items-center mx-2 py-4 px-4'>
          <button
            className='bg-blue-200 text-gray-900 font-bold w-full rounded-full '
            onClick={() => handleActionSelected('search')}
            type='button'
          >
            Search
          </button>
          <button
            className='bg-blue-200 text-gray-900 font-bold w-full rounded-full'
            onClick={() => handleActionSelected('selectStartLocation')}
            type='button'
          >
            Select Start Location
          </button>
          <button
            className='bg-blue-200 text-gray-900 font-bold w-full rounded-full'
            onClick={() => handleActionSelected('removeStartLocation')}
            type='button'
          >
            Remove Start Location
          </button>
          <button
            className='bg-blue-200 text-gray-900 font-bold w-full rounded-full'
            onClick={() => handleActionSelected('selectEndLocation')}
            type='button'
          >
            Select End Location
          </button>
          <button
            className='bg-blue-200  text-gray-900 font-bold w-full rounded-full'
            onClick={() => handleActionSelected('removeEndLocation')}
            type='button'
          >
            Remove End Location
          </button>
          <button
            className='bg-blue-200 text-gray-900 font-bold w-full rounded-full'
            onClick={() => handleActionSelected('getUserLocation')}
            type='button'
          >
            Get User Location
          </button>
          <button
            className='bg-blue-200 text-gray-900 font-bold w-full rounded-full'
            onClick={() => handleActionSelected('exit')}
            type='button'
          >
            Exit
          </button>
          {/* Add more buttons for other actions */}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
