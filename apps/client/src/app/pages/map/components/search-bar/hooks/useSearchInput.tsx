import { ChangeEvent, RefObject, useRef, useState } from 'react';

function useSearchInput({
  data,
  setFilterData,
  setIsOpen,
  isOpen
}: UseSearchInputProps) {
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

    const newData = data.filter(title => {
      return title.toLowerCase().includes(value.toLowerCase().trim());
    });
    setFilterData(newData);
  };

  const clearInput = () => {
    setSearch('');
    setFilterData([]);
    ref.current?.focus();
  };

  return { search, onInputChange, ref, clearInput };
}

export default useSearchInput;
