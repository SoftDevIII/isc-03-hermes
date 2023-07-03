import { LngLat } from 'mapbox-gl';
import useCoordinates from '../../../../contexts/coordinates/CoordinatesState';
import useMap from '../../../../contexts/map/MapState';
import useRouteType from '../../../../contexts/route-selector/RouteTypeState';
import { calculateRoute, drawRoute } from './useGetRoute';

function useDrawRoute() {
  const { map } = useMap();
  const { startCoordinates, endCoordinates } = useCoordinates();
  const { routeType } = useRouteType();

  const handleCalculateAndDraw = async () => {
    const type = routeType;
    const data: DirectionsResponse = await calculateRoute(
      startCoordinates as LngLat,
      endCoordinates as LngLat,
      type
    );
    if (!data.routes || data.routes.length === 0) {
      return;
    }

    const { coordinates } = data.routes[0].geometry;
    if (!map.current) {
      return;
    }
    drawRoute(coordinates, map.current);
  };

  return handleCalculateAndDraw;
}

export default useDrawRoute;
