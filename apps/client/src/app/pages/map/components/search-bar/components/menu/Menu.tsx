import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import useMultiRefs from '../../../../hooks/useMultiRefs';
import MenuButton from './components/MenuButton';
import MenuDropDownList from './components/MenuDropDownList';
import useMenuActions from './hooks/useMenuActions';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleActionSelected } = useMenuActions();
  const [addRef] = useMultiRefs({ setIsOpen });

  return (
    <div className='lg:relative'>
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
