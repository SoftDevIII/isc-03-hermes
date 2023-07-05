import NotificationIcon from '@home-assets/notifications-icon.png';
import UserIcon from '@home-assets/user-icon.png';
import Button from '@map-shared-components/Button';

function IsLoggedInView({ username = 'Guest' }: IsLoggedInViewProps) {
  const handleClickNotification = () => {};
  const handleClickUser = () => {};

  return (
    <div className='flex items-center space-x-4 text-[#CADEED] text-sm sm:text-base'>
      <Button onClick={handleClickUser} className='sm:w-11 w-7 mr-2 sm:mr-5'>
        <img src={UserIcon} alt='NotificationIcon' />
      </Button>
      {username}
      <div className='w-px bg-[#CADEED] h-8 mx-4 hidden sm:block' />
      <Button onClick={handleClickNotification} className='sm:w-10 w-6'>
        <img src={NotificationIcon} alt='NotificationIcon' />
      </Button>
    </div>
  );
}

export default IsLoggedInView;
