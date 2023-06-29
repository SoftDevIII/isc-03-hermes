import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import MenuOptions from './components/MenuOptions';
import StartButton from './components/StartButton';

function PopUpForRouteInformation() {
  const { startCoordinates, endCoordinates } = useCoordinates();

  if (
    startCoordinates.lng === 0 ||
    startCoordinates.lat === 0 ||
    endCoordinates.lng === 0 ||
    endCoordinates.lat === 0
  ) {
    return <div />;
  }

  return (
    <div className='absolute bottom-6 left-0 right-0 flex flex-col gap-4 z-0 items-center'>
      <StartButton />
      <MenuOptions />
    </div>
  );
}

export default PopUpForRouteInformation;
