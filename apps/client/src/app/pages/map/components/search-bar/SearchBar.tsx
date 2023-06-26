import SearchIcon from '@mui/icons-material/Search';
import useMap from '../../contexts/map/MapState';
import Menu from './components/menu/Menu';

function SearchBar() {
  const { isLoading } = useMap();

  if (isLoading) {
    return <div />;
  }

  return (
    <div className='grid absolute w-full py-4 z-10'>
      <div
        className='flex bg-black/50 py-2 md:py-3 px-4 w-5/6 md:w-4/6 rounded-2xl
      justify-between place-items-center m-auto'
      >
        <div className='text-[25px] md:text-[30px] grid h-full place-items-center'>
          <SearchIcon className='text-white' fontSize='inherit' />
        </div>
        <h1 className='text-lg text-white/50 font-roboto'>Search</h1>
        <Menu />
      </div>
    </div>
  );
}
export default SearchBar;
