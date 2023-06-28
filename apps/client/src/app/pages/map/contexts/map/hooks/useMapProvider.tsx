import { useMemo } from 'react';
import useCreateMap from './useCreateMap';

function useMapProvider() {
  const { map, container, actualZoom } = useCreateMap();

  const mapProviderValue = useMemo(
    () => ({ map, container, actualZoom }),
    [map, container, actualZoom]
  );

  return mapProviderValue;
}

export default useMapProvider;
