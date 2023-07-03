import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import { ChangeEvent, RefObject, useRef, useState } from 'react';
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
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

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
    setSearch('');
    setFilterData([]);
    ref.current?.focus();
  };

  const handleSearch = () => {
    setSearch('');
    setFilterData([]);
    setIsOpen(false);
  };

  return { search, onInputChange, ref, clearInput, handleSearch };
}

export default useSearchDisasterInput;
