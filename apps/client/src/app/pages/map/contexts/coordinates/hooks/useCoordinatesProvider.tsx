import { LngLat } from 'mapbox-gl';
import { useMemo, useState } from 'react';
import useSearch from '../../../components/search-bar/hooks/useSearch';

function useCoordinatesProvider() {
  const [startCoordinates, setStartCoordinates] = useState<LngLat>(
    new LngLat(0, 0)
  );

  const [endCoordinates, setEndCoordinates] = useState<LngLat>(
    new LngLat(0, 0)
  );

  const [userCoordinates, setUserCoordinates] = useState<LngLat>(
    new LngLat(0, 0)
  );

  const [isMarking, setIsMarking] = useState(false);

  const { results: searchResults, search: searchPlaces } = useSearch();

  const coordinatesProviderValue = useMemo(
    () => ({
      startCoordinates,
      setStartCoordinates,
      endCoordinates,
      setEndCoordinates,
      userCoordinates,
      setUserCoordinates,
      isMarking,
      setIsMarking,
      searchResults,
      searchPlaces
    }),
    [
      startCoordinates,
      endCoordinates,
      userCoordinates,
      isMarking,
      searchResults,
      searchPlaces
    ]
  );

  return coordinatesProviderValue;
}

export default useCoordinatesProvider;
