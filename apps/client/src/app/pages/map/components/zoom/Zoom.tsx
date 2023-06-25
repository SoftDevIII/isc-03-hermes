import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ZoomLevel from './ZoomLevel';
import ZoomButton from './components/ZoomButton';
import useZoom from './hooks/useZoom';

function Zoom() {
  const { increaseZoom, decreaseZoom, actualZoom } = useZoom();

  return (
    <div className='absolute right-6 bottom-4 rounded-full md:right-8 md:bottom-8'>
      <div className='flex flex-col space-y-1 justify-center items-center'>
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
