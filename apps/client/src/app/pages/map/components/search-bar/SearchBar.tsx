import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div className='absolute grid left-0 right-0 top-12 place-items-center'>
      <div className='flex gap-5 bg-black/50 p-4 rounded-3xl items-center w-[900px]'>
        <SearchIcon className='text-white ' />
        <h1 className='text-xl text-white/50'>Search</h1>
      </div>
    </div>
  );
}
export default SearchBar;
