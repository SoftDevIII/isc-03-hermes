import { useEffect, useState } from 'react';
import useCoordinates from '../../../contexts/coordinates/CoordinatesState';
import { INIT_LAT, INIT_LONG } from '../../../utils/constants';
import searchAPI from '../apis/searchApi';
import { PlacesResponse } from '../interfaces/places';
import useDebounce from './useDebounce';

function useSearch() {
  const [results, setResults] = useState<PlacesResponse['features']>([]);
  const [query, setQuery] = useState('');
  const { userCoordinates } = useCoordinates();
  const [isLoading, setIsLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 5000);

  useEffect(() => {
    if (query.length === 0) {
      setResults([]); // clear results when query is empty
    }
  }, [query]);

  useEffect(() => {
    if (debouncedQuery.length === 0) {
      setResults([]); // clear results when query is empty
    } else {
      setIsLoading(true);
      searchAPI
        .get<PlacesResponse>(`/${debouncedQuery}.json`, {
          params: {
            proximity: `${userCoordinates ? userCoordinates.lng : INIT_LONG},${
              userCoordinates ? userCoordinates.lat : INIT_LAT
            }`
          }
        })
        .then(({ data }) => {
          const five = data.features.slice(0, 5);
          setResults(five);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, [debouncedQuery, userCoordinates]);

  return {
    results,
    search: setQuery,
    isLoading
  };
}

export default useSearch;
