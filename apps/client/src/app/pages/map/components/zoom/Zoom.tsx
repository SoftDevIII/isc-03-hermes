import useBounds from '../../context/bounds/BoundsState';
import useZoom from '../../hooks/useZoom';
import ZoomButton from '../../shared-ui-components/ZoomButton';
import AlertPopUp from './components/AlertPopUp';

function Zoom() {
  const { increaseZoom, decreaseZoom } = useZoom();
  const { isOutBounds } = useBounds();

  if (isOutBounds) {
    return (
      <>
        <AlertPopUp />
        <div className='absolute right-12 bottom-12 z-10 rounded-full'>
          <div className='flex flex-col justify-between  space-y-1'>
            <ZoomButton onClick={increaseZoom}>add</ZoomButton>
            <ZoomButton onClick={decreaseZoom}>remove</ZoomButton>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className='absolute right-12 bottom-12 z-10 rounded-full'>
      <div className='flex flex-col justify-between  space-y-1'>
        <ZoomButton onClick={increaseZoom}>add</ZoomButton>
        <ZoomButton onClick={decreaseZoom}>remove</ZoomButton>
      </div>
    </div>
  );
}

export default Zoom;
