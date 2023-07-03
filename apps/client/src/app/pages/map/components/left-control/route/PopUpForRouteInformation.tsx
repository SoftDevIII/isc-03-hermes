import useCoordinates from '../../../contexts/coordinates/CoordinatesState';
import useMap from '../../../contexts/map/MapState';
import StartButton from './components/StartButton';
import { deleteRoute } from './hooks/useGetRoute';

function PopUpForRouteInformation() {
  const { startCoordinates, endCoordinates } = useCoordinates();
  const { map } = useMap();

  if (!map.current) {
    return <div />;
  }

  if (
    startCoordinates?.lat === undefined ||
    startCoordinates?.lng === undefined
  ) {
    deleteRoute(map.current);
  }

  if (endCoordinates?.lat === undefined || endCoordinates?.lng === undefined) {
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
