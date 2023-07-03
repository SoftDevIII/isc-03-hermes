import useMap from '@map-contexts/map/MapState';
import Zoom from './zoom/Zoom';
import MapStyle from './map-style/MapStyle';

function RightControl() {
  const { isLoading } = useMap();

  if (isLoading) {
    return <div />;
  }

  return (
    <div className='absolute right-8 bottom-4 md:right-8 md:bottom-5 flex flex-col gap-2'>
      <MapStyle />
      <Zoom />
    </div>
  );
}

export default RightControl;
