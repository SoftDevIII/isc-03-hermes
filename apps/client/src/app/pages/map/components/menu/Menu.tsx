import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import MenuButton from '../../shared-ui-components/MenuButton';
import DropDownMenu from './components/DropDownMenu';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function goHome() {}
  function goProfile() {}
  function goSettings() {}
  function goHelp() {}

  const handleActionSelected = (action: string) => {
    switch (action) {
      case 'home':
        goHome();
        break;
      case 'profile':
        goProfile();
        break;
      case 'settings':
        goSettings();
        break;
      case 'help':
        goHelp();
        break;
      default:
        break;
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropDownMenu
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onActionSelected={handleActionSelected}
    >
      <MenuButton onClick={handleOpen}>
        <MenuIcon />
      </MenuButton>
    </DropDownMenu>
  );
}

export default Menu;
