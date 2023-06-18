import { useMemo } from 'react';
import useCreateMap from './useCreateMap';

function useMapProvider() {
  const { map, container } = useCreateMap();

  const mapProviderValue = useMemo(
    () => ({ map, container }),
    [map, container]
  );

  return mapProviderValue;
}

export default useMapProvider;
