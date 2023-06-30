import useMap from '@map-contexts/map/MapState';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { useState } from 'react';
import RouteSelectorDropDown from './components/RouteSelectorDropDown';
import RouteSelectorList from './components/RouteSelectorList';
import TypeRouteButton from './components/TypeRouteButton';

function RouteSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading } = useMap();
  const [routeType, setType] = useState('walk');

  if (isLoading) {
    return <div />;
  }

  return (
    <RouteSelectorDropDown
      setIsOpen={setIsOpen}
      className='absolute bottom-16 mb-10 left-8 w-10 h-10'
    >
      <TypeRouteButton handleClick={() => setIsOpen(!isOpen)}>
        {routeType === 'walk' && <DirectionsRunIcon fontSize='inherit' />}
        {routeType === 'bicycle' && <DirectionsBikeIcon fontSize='inherit' />}
        {routeType === 'car' && <DirectionsCarIcon fontSize='inherit' />}
      </TypeRouteButton>
      {isOpen && (
        <RouteSelectorList
          setType={setType}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      )}
    </RouteSelectorDropDown>
  );
}

export default RouteSelector;
