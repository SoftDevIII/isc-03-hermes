import { useState } from 'react';
import useSearchInput from '../hooks/useSearchInput';
import useSearchRef from '../hooks/useSearchRef';
import CloseButton from './CloseButton';
import SearchButton from './SearchButton';
import SearchData from './SearchData';

function SearchInput({
  createMarker,
  setIsOpen: setIsContextOpen
}: SearchInputProps) {
  const [filterData, setFilterData] = useState<(Feature | Coordinates)[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const { search, onInputChange, ref, clearInput, handleSearch } =
    useSearchInput({
      setFilterData,
      setIsOpen,
      isOpen,
      createMarker,
      setIsContextOpen
    });
  const { searchRef } = useSearchRef({ setIsOpen });

  return (
    <div className='flex gap-5 place-items w-full' ref={searchRef}>
      <SearchButton
        className='text-[25px] md:text-[30px] grid h-full w-5 place-items-center landscape:sm:text-[25px] portrait:md:text-[25px]'
        onClick={() => {
          ref.current?.focus();
        }}
      />
      <div className='flex gap-2 w-full bg-black/40 py-[6px] px-3 rounded-lg'>
        <input
          type='text'
          className='text-white w-full h-full outline-none bg-transparent landscape:sm:text-[16px]'
          placeholder='Search'
          onChange={onInputChange}
          value={search}
          ref={ref}
          onFocus={() => setIsOpen(true)}
        />
        {search !== '' && (
          <CloseButton
            className='text-[20px] md:text-[30px] grid h-full place-items-center landscape:sm:text-[18px] portrait:text-[18px]'
            onClick={() => clearInput()}
          />
        )}
      </div>
      {isOpen && filterData.length !== 0 && (
        <SearchData filterData={filterData} handleSearch={handleSearch} />
      )}
    </div>
  );
}

export default SearchInput;
