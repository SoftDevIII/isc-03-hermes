import json from '@assets/marker-options.json';
import RoomIcon from '@mui/icons-material/Room';
import { useState } from 'react';
import useEndMarker from '../../hooks/useEndMarker';
import useOptions from '../../hooks/useOptions';
import useStartMarker from '../../hooks/useStartMarker';
import DropDownList from '../../shared-ui-components/DropDownList';
import DropDownMenu from '../../shared-ui-components/DropDownMenu';
import MarkerButton from '../../shared-ui-components/MarkerButton';

function MarkerMenu() {
  const { setEndMarker, removeEndMarker } = useEndMarker();
  const { setStartMarker, removeStartMarker } = useStartMarker();

  const options = useOptions({ json });
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
      case 'search':
        break;
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
    <DropDownMenu setIsOpen={setIsOpen} className='bottom-12 left-12'>
      {isOpen && (
        <DropDownList
          options={options}
          className='bottom-12 mb-2'
          setIsOpen={setIsOpen}
          onActionSelected={handleActionSelected}
        />
      )}
      <MarkerButton onClick={() => setIsOpen(!isOpen)}>
        <RoomIcon />
      </MarkerButton>
    </DropDownMenu>
  );
}

export default MarkerMenu;
