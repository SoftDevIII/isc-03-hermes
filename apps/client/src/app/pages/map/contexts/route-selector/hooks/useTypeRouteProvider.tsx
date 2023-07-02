import { useMemo, useState } from 'react';

function useRouteTypeProvider() {
  const [routeType, setRouteType] = useState<string>('walk');

  const routeTypeProviderValue = useMemo(
    () => ({ routeType, setRouteType }),
    [routeType]
  );

  return routeTypeProviderValue;
}

export default useRouteTypeProvider;
