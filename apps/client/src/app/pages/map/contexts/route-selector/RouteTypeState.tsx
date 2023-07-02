import { useContext } from 'react';
import RouteTypeContext from './RouteTypeContext';

function useRouteType() {
  const context = useContext(RouteTypeContext);
  if (!context)
    throw new Error('useRouteType must be used within a RouteTypeProvider');
  return context;
}

export default useRouteType;
