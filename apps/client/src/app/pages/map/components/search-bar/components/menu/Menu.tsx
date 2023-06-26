import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import MenuButton from './components/MenuButton';
import MenuDropDownList from './components/MenuDropDownList';
import useMenuActions from './hooks/useMenuActions';
import useMultiRefs from '../../../../hooks/useMultiRefs';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleActionSelected } = useMenuActions();
  const [addRef] = useMultiRefs({ setIsOpen });

  return (
    <div className='md:relative'>
      {isOpen && (
        <MenuDropDownList
          className=''
          setIsOpen={setIsOpen}
          onActionSelected={handleActionSelected}
          addRef={addRef}
        />
      )}
      <MenuButton onClick={() => setIsOpen(!isOpen)} addRef={addRef}>
        <MenuIcon fontSize='inherit' />
      </MenuButton>
    </div>
  );
}

export default Menu;
