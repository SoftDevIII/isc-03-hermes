import useCoordinates from '../../../context/coordinates/CoordinatesState';

function CoordinatesDisplay() {
  const { startCoordinates } = useCoordinates();

  return (
    <div className='absolute top-12 left-12 text-center bg-black/50 p-4 rounded-3xl cursor-default text-white'>
      <h2>Coordinates:</h2>
      <p>
        {startCoordinates.lng.toFixed(6)},{startCoordinates.lat.toFixed(6)}
      </p>
    </div>
  );
}

export default CoordinatesDisplay;
