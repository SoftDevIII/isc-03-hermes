import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ZoomLevel from './ZoomLevel';
import ZoomButton from './components/ZoomButton';
import useZoom from './hooks/useZoom';
import useMap from '../../contexts/map/MapState';

function Zoom() {
  const { increaseZoom, decreaseZoom, actualZoom } = useZoom();
  const { isLoading } = useMap();

  if (isLoading) {
    return <div />;
  }

  return (
    <div className='absolute right-6 bottom-4 rounded-full md:right-8 md:bottom-8'>
      <div className='flex flex-col space-y-1 justify-center items-center landscape:sm:space-y-[1px]'>
        <ZoomButton onClick={increaseZoom} disabled={actualZoom === 100}>
          <AddIcon />
        </ZoomButton>
        <ZoomLevel actualZoom={actualZoom} />
        <ZoomButton onClick={decreaseZoom} disabled={actualZoom === 0}>
          <RemoveIcon />
        </ZoomButton>
      </div>
    </div>
  );
}

export default Zoom;
