import RoomIcon from '@mui/icons-material/Room';
import { useState } from 'react';
import useMarkerActions from '../../hooks/useMarkerActions';
import DropDownMenu from '../../shared-ui-components/DropDownMenu';
import MarkerButton from '../../shared-ui-components/MarkerButton';
import MarkerMenuList from './components/MarkerMenuList';

function MarkerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleActionSelected } = useMarkerActions();

  return (
    <DropDownMenu setIsOpen={setIsOpen} className='bottom-12 left-12'>
      {isOpen && (
        <MarkerMenuList
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          onActionSelected={handleActionSelected}
        />
      )}
      <MarkerButton onClick={() => setIsOpen(!isOpen)}>
        <RoomIcon fontSize='inherit' />
      </MarkerButton>
    </DropDownMenu>
  );
}

export default MarkerMenu;
