import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ZoomLevel from './ZoomLevel';
import ZoomButton from './components/ZoomButton';
import useZoom from './hooks/useZoom';

function Zoom() {
  const { increaseZoom, decreaseZoom, actualZoom } = useZoom();

  return (
    <div>
      <div className='flex flex-col gap-1 justify-center items-center landscape:sm:space-y-[1px]'>
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
