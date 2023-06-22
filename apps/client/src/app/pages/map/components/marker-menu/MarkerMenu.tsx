import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RoomIcon from '@mui/icons-material/Room';
import { useState } from 'react';

import useCoordinates from '../../context/coordinates/CoordinatesState';

import useMarkerActions from '../../hooks/useMarkerActions';
import DropDownMenu from '../../shared-ui-components/DropDownMenu';
import MarkerButton from '../../shared-ui-components/MarkerButton';
import MarkerMenuList from './components/MarkerMenuList';

function MarkerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleActionSelected } = useMarkerActions();

  const { isMarking } = useCoordinates();

  return (
    <DropDownMenu setIsOpen={setIsOpen} className='bottom-12 left-12'>
      {isOpen && (
        <MarkerMenuList
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          onActionSelected={handleActionSelected}
        />
      )}

      {!isMarking && (
        <MarkerButton onClick={() => setIsOpen(!isOpen)}>
          <RoomIcon fontSize='inherit' />
        </MarkerButton>
      )}
      {isMarking && (
        <MarkerButton onClick={() => handleActionSelected('stopMarking')}>
          <DeleteForeverIcon fontSize='inherit' />
        </MarkerButton>
      )}
    </DropDownMenu>
  );
}

export default MarkerMenu;
