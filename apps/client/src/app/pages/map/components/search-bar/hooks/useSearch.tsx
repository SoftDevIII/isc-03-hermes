import { useEffect, useState } from 'react';
import useCoordinates from '../../../contexts/coordinates/CoordinatesState';
import searchAPI from '../apis/searchApi';
import { PlacesResponse } from '../interfaces/places';
import useDebounce from './useDebounce';

function useSearch() {
  const [results, setResults] = useState<PlacesResponse['features']>([]);
  const [query, setQuery] = useState('');
  const { userCoordinates } = useCoordinates();
  const debouncedQuery = useDebounce(query, 50000);

  useEffect(() => {
    if (debouncedQuery.length === 0) {
      setResults([]); // clear results when query is empty
    } else if (userCoordinates) {
      searchAPI
        .get<PlacesResponse>(`/${debouncedQuery}.json`, {
          params: {
            proximity: `${userCoordinates.lng},${userCoordinates.lat}`
          }
        })
        .then(({ data }) => setResults(data.features))
        .catch(error => console.log(error));
    }
  }, [debouncedQuery, userCoordinates]);

  console.log(results);

  return {
    results,
    search: setQuery
  };
}

export default useSearch;
