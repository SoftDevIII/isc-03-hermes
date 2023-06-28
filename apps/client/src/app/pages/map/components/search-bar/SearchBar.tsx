import '@map-styles/scroll-bar.css';
import useMap from '../../contexts/map/MapState';
import SearchInput from './components/SearchInput';
import Menu from './components/menu/Menu';

function SearchBar() {
  const { isLoading } = useMap();

  if (isLoading) {
    return <div />;
  }

  return (
    <div className='grid absolute w-full py-4 z-10'>
      <div
        className='flex bg-black/50 py-[5px] md:py-3 px-4 w-5/6 md:w-8/12 rounded-2xl
          m-auto gap-4 justify-between landscape:sm:py-[5px] portrait:md:py-[5px]'
      >
        <SearchInput />
        <Menu />
      </div>
    </div>
  );
}

export default SearchBar;
