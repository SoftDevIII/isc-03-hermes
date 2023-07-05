import { useMemo } from 'react';
import useCreateMap from './useCreateMap';

function useMapProvider() {
  const { map, container, actualZoom, isLoading } = useCreateMap();

  const mapProviderValue = useMemo(
    () => ({ map, container, actualZoom, isLoading }),
    [map, container, actualZoom, isLoading]
  );

  return mapProviderValue;
}

export default useMapProvider;
