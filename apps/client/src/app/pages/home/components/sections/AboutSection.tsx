import bbl1 from '@home-assets/bubbles1.svg';
import bbl2 from '@home-assets/bubbles2.svg';
import bbl3 from '@home-assets/bubbles3.svg';

function AboutSection() {
  return (
    <div
      id='About'
      className='h-screen w-full flex bg-gradient-to-b
      from-blue-200 to-indigo-950 font-roboto text-blue-200'
    >
      <div
        className='w-full min-h-screen h-auto md:h-auto lg:h-screen flex flex-col
       text-xl md:text-3xl lg:text-3xl text-center'
      >
        <div className='h-1/3 flex flex-col items-center'>
          <img src={bbl1} alt='bubble1' className='mt-3 h-3/6' />
          <h1 className='px-5'>
            Find your way and explore explore the world with our intuitive GPS
            app
          </h1>
        </div>
        <div className='h-1/3 flex flex-col items-center'>
          <img src={bbl2} alt='bubble2' className='mt-3 h-3/6' />
          <h1 className='px-5'>
            Navigate with confidence and reach your destination
          </h1>
        </div>
        <div className='h-1/3 flex flex-col items-center'>
          <img src={bbl3} alt='bubble3' className='mt-3 h-3/6' />
          <h1 className='px-5'>
            Shows you the way without following your trail
          </h1>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
