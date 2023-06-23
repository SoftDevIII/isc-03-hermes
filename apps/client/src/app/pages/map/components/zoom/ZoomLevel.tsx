import useActualZoom from '../../hooks/useLevelZoom'; // Import the useActualZoom hook

function ZoomLevel() {
  const actualZoom = useActualZoom(); // Use the useActualZoom hook to get the actualZoom value

  return (
    <div className='rounded-full right-52'>
      <div className='flex rounded-2xl items-center'>
        <h1 className='text-lg text-white'>{actualZoom}%</h1>
      </div>
    </div>
  );
}

export default ZoomLevel;
