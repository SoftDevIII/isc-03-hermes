import { createContext } from 'react';

const RouteTypeContext = createContext<RouteTypeContextValue>({
  routeType: '',
  setRouteType: () => {}
});

export default RouteTypeContext;
