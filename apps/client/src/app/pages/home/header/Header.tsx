import IsLoggedInView from '@home-components/IsLoggedInVIew';
import IsNotLoggedInView from '@home-components/IsNotLoggedInView';
import MenuSideBar from '@home-components/MenuSideBar';
import ReferenceButton from '@home-components/ReferenceButton';

function Header({ isLoggedIn, username = 'Guest' }: HeaderProps) {
  return (
    <div className='flex items-center justify-between bg-[#1D3C66] text-[#CADEED] py-4 px-6 font-roboto'>
      <div className='block sm:hidden'>
        <MenuSideBar />
      </div>
      <div className='flex items-center space-x-4'>
        <h1 className='text-sm font-bold sm:text-xl p-1'>Hermes</h1>
        <div className='space-x-4 hidden sm:flex'>
          <ReferenceButton content='Home' />
          <ReferenceButton content='About' />
          <ReferenceButton content='Functions' />
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
