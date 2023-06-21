import json from '@assets/marker-options.json';
import RoomIcon from '@mui/icons-material/Room';
import { useState } from 'react';
import useMarkerActions from '../../hooks/useMarkerActions';
import useOptions from '../../hooks/useOptions';
import DropDownList from '../../shared-ui-components/DropDownList';
import DropDownMenu from '../../shared-ui-components/DropDownMenu';
import MarkerButton from '../../shared-ui-components/MarkerButton';

function MarkerMenu() {
  const options = useOptions({ json });
  const [isOpen, setIsOpen] = useState(false);
  const { handleActionSelected } = useMarkerActions();

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
