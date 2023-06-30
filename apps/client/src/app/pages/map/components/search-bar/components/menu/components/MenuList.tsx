import help from '@map-assets/help.png';
import home from '@map-assets/home.png';
import lightMode from '@map-assets/light-mode.png';
import settings from '@map-assets/settings.png';
import logout from '@map-assets/sign-out.png';
import Favorites from './Favorites';
import Line from './Line';
import MenuOptionButton from './MenuOptionButton';
import OptionImage from './OptionImage';

function MenuList({ handleActionSelected }: MenuListProps) {
  return (
    <li className='w-full shadow-xl rounded-b-2xl place-items-start  flex flex-col'>
      <MenuOptionButton
        title='Home'
        onClick={() => handleActionSelected('goHome')}
      >
        <OptionImage src={home} />
      </MenuOptionButton>
      <Favorites
        title='Favorites'
        onClick={() => handleActionSelected('showFavorites')}
      >
        <span />
      </Favorites>
      <MenuOptionButton
        title='Profile Settings'
        onClick={() => handleActionSelected('goSettings')}
      >
        <OptionImage src={settings} />
      </MenuOptionButton>
      <MenuOptionButton
        title='Help Center'
        onClick={() => handleActionSelected('goHelp')}
      >
        <OptionImage src={help} />
      </MenuOptionButton>
      <MenuOptionButton
        title='Light Mode'
        onClick={() => handleActionSelected('goLightMode')}
      >
        <OptionImage src={lightMode} />
      </MenuOptionButton>
      <Line />
      <MenuOptionButton
        title='Sign Out'
        onClick={() => handleActionSelected('goLogout')}
        last
      >
        <OptionImage src={logout} />
      </MenuOptionButton>
    </li>
  );
}

export default MenuList;
