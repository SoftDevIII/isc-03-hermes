import useMap from '@map-contexts/map/MapState';
import useRouteType from '@map-contexts/route-selector/RouteTypeState';
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
  const { routeType } = useRouteType();

  if (isLoading) {
    return <div />;
  }

  return (
    <RouteSelectorDropDown setIsOpen={setIsOpen}>
      <TypeRouteButton handleClick={() => setIsOpen(!isOpen)}>
        {routeType === 'walk' && <DirectionsRunIcon fontSize='inherit' />}
        {routeType === 'bicycle' && <DirectionsBikeIcon fontSize='inherit' />}
        {routeType === 'car' && <DirectionsCarIcon fontSize='inherit' />}
      </TypeRouteButton>
      {isOpen && <RouteSelectorList setIsOpen={setIsOpen} isOpen={isOpen} />}
    </RouteSelectorDropDown>
  );
}

export default RouteSelector;
