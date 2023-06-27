import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent } from 'react';
import useMap from '../../contexts/map/MapState';
import SearchResults from './SearchResults';
import Menu from './components/menu/Menu';
import useSearch from './hooks/useSearch';

function SearchBar() {
  const { isLoading } = useMap();
  const { search, results, isLoading: searchIsLoading } = useSearch();

  if (isLoading || searchIsLoading) {
    return <div />;
  }

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    search(event.target.value);
  };

  return (
    <div className='grid absolute w-full py-4 z-10'>
      <div
        className='flex bg-black/50 py-2 md:py-3 px-4 w-5/6 md:w-4/6 rounded-2xl
      justify-between place-items-center m-auto'
      >
        <div className='text-[25px] md:text-[30px] grid h-full place-items-center'>
          <SearchIcon className='text-white' fontSize='inherit' />
          <input
            type='text'
            placeholder='Search place'
            onChange={onQueryChange}
            className='bg-transparent text-white text-[20px] md:text-[25px] w-full h-full outline-none'
          />
        </div>
        <Menu />
        <SearchResults results={results} />
      </div>
    </div>
  );
}
export default SearchBar;
