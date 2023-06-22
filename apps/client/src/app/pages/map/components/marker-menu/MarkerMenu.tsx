import RoomIcon from '@mui/icons-material/Room';
import { useState } from 'react';
import DropDownMenu from '../../shared-ui-components/DropDownMenu';
import MarkerButton from '../../shared-ui-components/MarkerButton';
import MenuList from './components/MenuList';

function MarkerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropDownMenu setIsOpen={setIsOpen} className='bottom-12 left-12'>
      {isOpen && <MenuList setIsOpen={setIsOpen} isOpen={isOpen} />}
      <MarkerButton onClick={() => setIsOpen(!isOpen)}>
        <RoomIcon />
      </MarkerButton>
    </DropDownMenu>
  );
}

export default MarkerMenu;
