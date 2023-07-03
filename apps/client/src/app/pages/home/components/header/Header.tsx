import IsLoggedInView from './components/IsLoggedInVIew';
import IsNotLoggedInView from './components/IsNotLoggedInView';
import MenuSideBar from './components/MenuSideBar';
import ReferenceButton from './components/ReferenceButton';

function Header({ isLoggedIn = false, username = 'Guest' }: HeaderProps) {
  return (
    <div className='flex items-center justify-between bg-[#1D3C66] text-[#CADEED] py-4 px-6 font-roboto'>
      <div className='block sm:hidden'>
        <MenuSideBar />
      </div>
      <div className='flex items-center space-x-4'>
        <h1 className='text-sm font-bold sm:text-xl p-1'>Hermes</h1>
        <div className='space-x-4 hidden sm:flex'>
          <ReferenceButton href='/home#Home' content='Home' />
          <ReferenceButton href='/home#About' content='About' />
          <ReferenceButton href='/home#Functions' content='Functions' />
          <ReferenceButton href='/map' content='Go Map' />
          {!isLoggedIn && <ReferenceButton href='/sign-up' content='Sign Up' />}
        </div>
      </div>
      <div>
        {!isLoggedIn && <IsNotLoggedInView />}
        {isLoggedIn && <IsLoggedInView username={username} />}
      </div>
    </div>
  );
}

export default Header;
