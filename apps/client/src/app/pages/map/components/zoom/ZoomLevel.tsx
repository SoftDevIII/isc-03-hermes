import useMap from '../../context/map/MapState';

function ZoomLevel() {
  const { actualZoom } = useMap();

  return (
    <div className='rounded-full right-52'>
      <div className='flex rounded-2xl items-center'>
        <h1 className='text-lg text-white'>{actualZoom}%</h1>
      </div>
    </div>
  );
}

export default ZoomLevel;
