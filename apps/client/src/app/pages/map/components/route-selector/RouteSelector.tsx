import useMap from '@map-contexts/map/MapState';
import RoomIcon from '@mui/icons-material/Room';
import { useState } from 'react';
import MarkerButton from '../marker/components/MarkerButton';
import RouteSelectorDropDown from './components/RouteSelectorDropDown';
import RouteSelectorList from './components/RouteSelectorList';

function RouteSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading } = useMap();

  if (isLoading) {
    return <div />;
  }

  return (
    <RouteSelectorDropDown
      setIsOpen={setIsOpen}
      className='absolute bottom-4 left-6 w-10 h-10'
    >
      <MarkerButton onClick={() => setIsOpen(!isOpen)}>
        <RoomIcon fontSize='inherit' />
      </MarkerButton>
      {isOpen && <RouteSelectorList setIsOpen={setIsOpen} isOpen={isOpen} />}
    </RouteSelectorDropDown>
  );
}

export default RouteSelector;
