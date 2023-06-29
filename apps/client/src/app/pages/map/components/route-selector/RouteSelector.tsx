import useMap from '@map-contexts/map/MapState';
import { useState } from 'react';
import Button from '../../shared-ui-components/Button';
import RouteSelectorDropDown from './components/RouteSelectorDropDown';
import RouteSelectorList from './components/RouteSelectorList';

function RouteSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading } = useMap();

  if (isLoading) {
    return <div />;
  }

  const onCLick = () => {};

  return (
    <div className='absolute bottom-8 left-8 w-10 h-10 bg-black'>
      <Button className='w-12 h-12' onClick={onCLick}>
        <RouteSelectorDropDown
          setIsOpen={setIsOpen}
          className='bg-black absolute bottom-4 left-6 md:bottom-8 md:left-8 z-10'
        >
          {isOpen && (
            <RouteSelectorList setIsOpen={setIsOpen} isOpen={isOpen} />
          )}
        </RouteSelectorDropDown>
      </Button>
    </div>
  );
}

export default RouteSelector;
