import useMap from '@map-contexts/map/MapState';
import Zoom from './zoom/Zoom';

function RightControl() {
  const { isLoading } = useMap();

  if (isLoading) {
    return <div />;
  }

  return (
    <div className='absolute right-8 bottom-4 rounded-full md:right-8 md:bottom-5'>
      <Zoom />
    </div>
  );
}

export default RightControl;
