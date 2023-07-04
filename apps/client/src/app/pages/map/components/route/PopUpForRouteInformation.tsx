import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMap from '@map-contexts/map/MapState';
import StartButton from './components/StartButton';
import { deleteRoute } from './hooks/useGetRoute';

function PopUpForRouteInformation() {
  const { startCoordinates, endCoordinates, userCoordinates } =
    useCoordinates();
  const { map } = useMap();

  if ((!userCoordinates && !startCoordinates) || !endCoordinates) {
    deleteRoute(map.current);
    return <div />;
  }

  return (
    <div className='absolute bottom-6 left-1/2 right-1/2 flex flex-col gap-4 z-0 items-center'>
      <StartButton />
    </div>
  );
}

export default PopUpForRouteInformation;
