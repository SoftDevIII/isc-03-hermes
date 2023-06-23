import NotificationIcon from '@/assets/notifications-icon.png';
import UserIcon from '@/assets/user-icon.png';
import Button from '../../shared-ui-components/Button';

function Header({ handleClick, isLoggedIn, username }: HeaderProps) {
  return (
    <div className='flex items-center justify-between bg-[#1D3C66] text-[#CADEED] py-4 px-6'>
      <div className='flex space-x-4'>
        <h1 className='text-xl font-bold'>Hermes</h1>
        <Button onClick={handleClick}>Home</Button>
        <Button onClick={handleClick}>About</Button>
        <Button onClick={handleClick}>Functions</Button>
      </div>
      <div>
        {!isLoggedIn && (
          <div className='flex space-x-4 text-[#CADEED] font-semibold'>
            <Button onClick={handleClick}>Log In</Button>
            <Button
              onClick={handleClick}
              className={`rounded-xl bg-[#CADEED] p-3 text-[#1D3C66] ' hover:opacity-80 active:opacity-90'`}
            >
              Sign Up
            </Button>
          </div>
        )}
        {isLoggedIn && (
          <div className='flex items-center space-x-4 text-[#CADEED]'>
            <Button onClick={handleClick} className='w-11 mr-5'>
              <img src={UserIcon} alt='NotificationIcon' />
            </Button>
            {username}
            <div className='w-px bg-[#CADEED] h-8 mx-4' />
            <Button onClick={handleClick} className='w-10'>
              <img src={NotificationIcon} alt='NotificationIcon' />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
