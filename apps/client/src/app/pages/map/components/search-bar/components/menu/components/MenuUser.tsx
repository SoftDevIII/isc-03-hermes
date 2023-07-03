import Line from './Line';
import ProfileButton from './ProfileButton';

function MenuUser({ handleActionSelected }: MenuUserProps) {
  return (
    <>
      <div className='w-full rounded-t-2xl grid grid-cols-5 p-3 portrait:md:py-4 landscape:sm:p-2'>
        <div className='col-span-1 grid place-items-center content-center'>
          <ProfileButton onClick={() => handleActionSelected('goLogIn')} />
        </div>
        <div className='col-span-4 grid content-center ml-2'>
          <p className='font-roboto text-white portrait:md:text-xl'>UserName</p>
          <p className='text-xs font-roboto text-white/50 portrait:md:text-lg'>
            username@mail.com
          </p>
        </div>
      </div>
      <Line />
    </>
  );
}

export default MenuUser;
