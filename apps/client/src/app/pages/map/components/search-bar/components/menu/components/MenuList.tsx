import home from '@map-assets/home.png';
import SignUp from '@mui/icons-material/ExitToApp';
import LandslideIcon from '@mui/icons-material/Landslide';
import Line from './Line';
import MenuOptionButton from './MenuOptionButton';
import OptionImage from './OptionImage';

function MenuList({ handleActionSelected }: MenuListProps) {
  return (
    <li className='w-full shadow-xl rounded-b-2xl flex flex-col'>
      <MenuOptionButton
        title='Home'
        onClick={() => handleActionSelected('goHome')}
      >
        <OptionImage src={home} />
      </MenuOptionButton>
      <MenuOptionButton
        title='Report Disaster'
        onClick={() => handleActionSelected('goDisaster')}
      >
        <LandslideIcon />
      </MenuOptionButton>
      <Line />
      <MenuOptionButton
        title='Sign Up'
        onClick={() => handleActionSelected('goSignUp')}
        last
      >
        <SignUp />
      </MenuOptionButton>
    </li>
  );
}

export default MenuList;
