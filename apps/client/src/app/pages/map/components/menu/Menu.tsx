import json from '@assets/menu-options.json';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import useMenuActions from '../../hooks/useMenuActions';
import useOptions from '../../hooks/useOptions';
import DropDownList from '../../shared-ui-components/DropDownList';
import DropDownMenu from '../../shared-ui-components/DropDownMenu';
import MenuButton from '../../shared-ui-components/MenuButton';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const options = useOptions({ json });
  const { handleActionSelected } = useMenuActions();

  return (
    <DropDownMenu setIsOpen={setIsOpen} className='top-12 right-12'>
      {isOpen && (
        <DropDownList
          options={options}
          className='top-12 mt-2 right-0'
          setIsOpen={setIsOpen}
          onActionSelected={handleActionSelected}
        />
      )}
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </MenuButton>
    </DropDownMenu>
  );
}

export default Menu;
