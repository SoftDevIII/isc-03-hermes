import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import { ChangeEvent, useState } from 'react';
import {
  convertCoordinatesToFeat,
  convertRegexToCoordinates,
  fetchMapBoxPlaces
} from '../../map/components/search-bar/services/SearchBarService';

function useSearchDisasterInput({
  setFilterData,
  setIsOpen,
  isOpen
}: UseSearchDisasterInputProps) {
  const { userCoordinates } = useCoordinates();

  const [search, setSearch] = useState<string>('');

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);

    if (value === '') {
      setFilterData([]);
      return;
    }

    if (!isOpen) setIsOpen(true);

    const coordinatesSearch = convertRegexToCoordinates({
      coordinates: value
    });

    if (coordinatesSearch) {
      const newFeat = convertCoordinatesToFeat({
        coordinates: coordinatesSearch
      });
      setFilterData([
        {
          ...newFeat,
          temperature: 0,
          category: '',
          description: '',
          address: ''
        }
      ]);
      return;
    }

    fetchMapBoxPlaces({
      query: value,
      coordinates: userCoordinates,
      setFilterData
    });
  };

  const clearInput = () => {
    setFilterData([]);
  };

  return { search, onInputChange, clearInput, setSearch };
}

export default useSearchDisasterInput;
