import RouteTypeContext from './RouteTypeContext';
import useRouteTypeProvider from './hooks/useTypeRouteProvider';

function RouteTypeProvider({ children }: RouteTypeProviderProps) {
  const routeTypeProviderValue = useRouteTypeProvider();

  return (
    <RouteTypeContext.Provider value={routeTypeProviderValue}>
      {children}
    </RouteTypeContext.Provider>
  );
}

export default RouteTypeProvider;
