import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import { ChangeEvent, RefObject, useRef, useState } from 'react';
import fetchMapBoxPlaces from '../services/SearchBarService';

function useSearchInput({
  setFilterData,
  setIsOpen,
  isOpen
}: UseSearchInputProps) {
  const { userCoordinates } = useCoordinates();

  const [search, setSearch] = useState<string>('');
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);

    if (value.trim() === '') {
      setFilterData([]);
      return;
    }

    if (!isOpen) setIsOpen(true);

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

  return { search, onInputChange, ref, clearInput };
}

export default useSearchInput;
