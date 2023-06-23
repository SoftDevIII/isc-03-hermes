import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useZoom from '../../hooks/useZoom';
import ZoomButton from '../../shared-ui-components/ZoomButton';
import ZoomLevel from './ZoomLevel';

function Zoom() {
  const { increaseZoom, decreaseZoom } = useZoom();

  return (
    <div className='absolute right-12 bottom-12 z-10 rounded-full'>
      <div className='flex flex-col space-y-1 justify-center items-center'>
        <ZoomButton onClick={increaseZoom}>
          <AddIcon />
        </ZoomButton>
        <ZoomLevel />
        <ZoomButton onClick={decreaseZoom}>
          <RemoveIcon />
        </ZoomButton>
      </div>
    </div>
  );
}

export default Zoom;
