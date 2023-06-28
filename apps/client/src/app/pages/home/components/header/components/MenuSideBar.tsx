import ReferenceButton from '@header-components/ReferenceButton';
import MenuBar from '@home-assets/menu-bar.png';
import { useState } from 'react';

function MenuSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button type='button' onClick={toggleSidebar}>
        <img src={MenuBar} className='w-5' alt='MenuBar' />
      </button>
      <div
        className={` ${
          isOpen ? 'translate-x-2' : 'hidden'
        } sm:text-base text-sm`}
      >
        <div className='flex flex-col p-1'>
          <ReferenceButton content='Home' />
          <ReferenceButton content='About' />
          <ReferenceButton content='Functions' />
        </div>
      </div>
    </div>
  );
}

export default MenuSideBar;
