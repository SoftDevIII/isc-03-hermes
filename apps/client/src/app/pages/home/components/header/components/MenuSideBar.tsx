import MenuBar from '@home-assets/menu-bar.png';
import { useState } from 'react';
import useMenuSideBarRef from '../hooks/useMenuSideBarRef';
import ReferenceButton from './ReferenceButton';

function MenuSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useMenuSideBarRef({ setIsOpen });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative' ref={ref}>
      <button type='button' onClick={toggleSidebar}>
        <img src={MenuBar} className='w-5' alt='MenuBar' />
      </button>
      {isOpen && (
        <div className='text-white absolute left-0 top-6 bg-[#19181e] rounded-lg p-4 flex flex-col gap-2'>
          <ReferenceButton
            href='/home#Home'
            content='Home'
            setIsOpen={setIsOpen}
          />
          <ReferenceButton
            href='/home#About'
            content='About'
            setIsOpen={setIsOpen}
          />
          <ReferenceButton
            href='/home#Functions'
            content='Functions'
            setIsOpen={setIsOpen}
          />
          <ReferenceButton href='/map' content='Go Map' setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
}

export default MenuSideBar;
