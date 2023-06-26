import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuOptionButton from './MenuOptionButton';
import ProfileButton from './ProfileButton';

function MenuDropDownList({
  className,
  setIsOpen,
  onActionSelected,
  addRef
}: MenuDropDownListProps) {
  const handleActionSelected = (action: string) => {
    onActionSelected(action);
    setIsOpen(false);
  };

  return (
    <div
      className={`absolute grid right-0 left-0 top-0 bottom-0 h-screen bg-black/60
    md:bg-black/0 md:top-8 md:w-80 md:h-72 md:left-auto ${className}`}
    >
      <div
        className='w-4/6 md:w-full rounded-2xl shadow-2xl
      bg-[#4f5d73] p-4 flex flex-col gap-1 m-auto'
        ref={ref => addRef({ ref })}
      >
        <div
          className='w-full bg-white rounded-t-2xl shadow-xl
        grid grid-cols-5 px-5 py-2 md:py-1'
        >
          <div className='col-span-1 grid place-items-center content-center'>
            <ProfileButton onClick={() => handleActionSelected('goProfile')} />
          </div>
          <div className='col-span-4 grid content-center ml-2 p-2'>
            <p className='text-lg font-roboto'>@UserName</p>
          </div>
        </div>
        <li className='w-full bg-white shadow-xl rounded-b-2xl flex flex-col'>
          <MenuOptionButton
            title='Home'
            onClick={() => handleActionSelected('goHome')}
          >
            <HomeIcon fontSize='inherit' />
          </MenuOptionButton>
          <MenuOptionButton
            title='Settings'
            onClick={() => handleActionSelected('goSettings')}
          >
            <SettingsIcon fontSize='inherit' />
          </MenuOptionButton>
          <MenuOptionButton
            title='Help'
            onClick={() => handleActionSelected('goHelp')}
            last
          >
            <HelpIcon fontSize='inherit' />
          </MenuOptionButton>
        </li>
      </div>
    </div>
  );
}

export default MenuDropDownList;
