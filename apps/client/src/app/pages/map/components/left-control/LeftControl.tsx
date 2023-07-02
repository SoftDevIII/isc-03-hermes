import useMap from '@map-contexts/map/MapState';
import ActualLocation from './actual-location/ActualLocation';
import MarkerMenu from './marker/MarkerMenu';

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
      <MarkerMenu />
      <ActualLocation />
    </div>
  );
}

export default LeftControl;
