import SupportButton from './SupportButton';

function SupportButtons() {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex justify-center space-x-1'>
        <SupportButton title='Info' />
        <SupportButton title='Support' />
        <SupportButton title='Marketing' isLast />
      </div>
      <div className='flex justify-center space-x-1'>
        <SupportButton title='Privacy Policy' />
        <SupportButton title='Legal Information' isLast />
      </div>
      <p className='text-center text-white font-roboto'>© Hermes 2023</p>
    </div>
  );
}

export default SupportButtons;
