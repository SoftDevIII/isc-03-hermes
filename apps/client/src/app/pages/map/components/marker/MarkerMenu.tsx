import RoomIcon from '@mui/icons-material/Room';
import { useState } from 'react';
import useEndMarker from '../../hooks/useEndMarker';
import useStartMarker from '../../hooks/useStartMarker';
import MarkerButton from '../../shared-ui-components/MarkerButton';
import CoordinatesDisplay from './components/CoordinatesDisplay';
import DropDownMarker from './components/DropDownMarker';

function MarkerMenu() {
  const { setEndMarker, removeEndMarker } = useEndMarker();
  const { setStartMarker, removeStartMarker } = useStartMarker();
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState<string>('');

  useEffect(() => {
    if (isStartingPoint) {
      setHover('url(../../../../../../public/hover-icon.png), auto');
    } else {
      setHover('');
    }
  }, [isStartingPoint]);

  const handleActionSelected = (action: string) => {
    switch (action) {
      case 'selectStartLocation':
        setStartMarker();
        break;
      case 'removeStartLocation':
        removeStartMarker();
        break;
      case 'selectEndLocation':
        setEndMarker();
        break;
      case 'removeEndLocation':
        removeEndMarker();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <CoordinatesDisplay />
      <DropDownMarker
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onActionSelected={handleActionSelected}
      >
        <MarkerButton onClick={() => setIsOpen(!isOpen)}>
          <RoomIcon />
        </MarkerButton>
      </DropDownMarker>
    </div>
  );
}

export default MarkerMenu;
