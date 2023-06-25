import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RoomIcon from '@mui/icons-material/Room';
import { useState } from 'react';
import MarkerButton from './components/MarkerButton';
import MarkerDropDownMenu from './components/MarkerDropDownMenu';
import MarkerMenuList from './components/MarkerMenuList';
import useMarkerActions from './hooks/useMarkerActions';

function MarkerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { handleActionSelected } = useMarkerActions();
  const { isMarking } = useCoordinates();

  return (
    <MarkerDropDownMenu
      setIsOpen={setIsOpen}
      className='absolute bottom-4 left-6 md:bottom-8 md:left-8'
    >
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
    </MarkerDropDownMenu>
  );
}

export default MarkerMenu;
