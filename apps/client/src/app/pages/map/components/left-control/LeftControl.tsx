import useMap from '@map-contexts/map/MapState';
import ActualLocation from './actual-location/ActualLocation';
import Compass from './compass/Compass';
import MarkerMenu from './marker/MarkerMenu';
import RouteSelector from './route-selector/RouteSelector';

function LeftControl() {
  const { isLoading } = useMap();

  if (isLoading) {
    return <div />;
  }

  return (
    <div
      className='flex flex-col gap-2
    absolute left-8 bottom-4 rounded-full md:left-8 md:bottom-5'
    >
      <Compass />
      <ActualLocation />
      <RouteSelector />
      <MarkerMenu />
    </div>
  );
}

export default LeftControl;
