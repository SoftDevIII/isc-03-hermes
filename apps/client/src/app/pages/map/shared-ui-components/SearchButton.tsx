import SearchIcon from '@mui/icons-material/Search';
import Button from './Button';

function SearchButton({ onClick, className }: SearchButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`rounded-full hover:opacity-80 active:opacity-90 ${className}`}
    >
      <SearchIcon className='text-white' fontSize='inherit' />
    </Button>
  );
}

export default SearchButton;
