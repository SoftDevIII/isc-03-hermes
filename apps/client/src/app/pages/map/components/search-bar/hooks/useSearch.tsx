import { useEffect, useState } from 'react';
import useCoordinates from '../../../contexts/coordinates/CoordinatesState';
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
    if (debouncedQuery.length === 0) {
      setResults([]); // clear results when query is empty
    } else if (userCoordinates) {
      setIsLoading(true);
      searchAPI
        .get<PlacesResponse>(`/${debouncedQuery}.json`, {
          params: {
            proximity: `${userCoordinates.lng},${userCoordinates.lat}`
          }
        })
        .then(({ data }) => {
          const five = data.features.slice(0, 5);
          console.log(five);
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
