import bbl1 from 'public/Bubbles1.svg';
import bbl2 from 'public/Bubbles2.svg';
import bbl3 from 'public/Bubbles3.svg';
import FontRoboto from '../resurces/Fonts';

function Section2() {
  return (
    <div
      className='flex h-screen bg-gradient-to-b
      from-blue-200 to-indigo-950'
      style={FontRoboto(false)}
    >
      <div className='w-full flex flex-col text-3xl'>
        <div className='h-1/3 flex flex-col items-center'>
          <img src={bbl1} alt='bubble1' className='mt-3 h-4/6' />
          Find your way and explore explore the world with our intuitive GPS app
        </div>
        <div className='h-1/3 flex flex-col items-center'>
          <img src={bbl2} alt='bubble2' className='mt-3 h-4/6' />
          Navigate with confidence and reach your destination
        </div>
        <div className='h-1/3 flex flex-col items-center'>
          <img src={bbl3} alt='bubble3' className='mt-3 h-4/6' />
          Shows you the way without following your trail
        </div>
      </div>
    </div>
  );
}
export default Section2;
