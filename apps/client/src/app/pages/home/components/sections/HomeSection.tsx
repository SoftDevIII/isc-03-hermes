import coverage from '@home-assets/fullCoverage.svg';
import pointimg from '@home-assets/goTo.png';
import hrmsLogo from '@home-assets/hrmsBoots.jpeg';
import map from '@home-assets/mapHome.png';
import mas from '@home-assets/more.svg';
import ubi from '@home-assets/ubi.svg';

function HomeSection() {
  return (
    <div className='w-full flex bg-gradient-to-b from-blue-200 to-indigo-950 font-roboto'>
      <div className='w-full min-h-screen h-auto md:h-auto lg:h-screen flex flex-col'>
        <div id='head' className='h-32 md:h-40 lg:h-1/6 flex'>
          <div className='w-1/3 md:w-auto lg:w-auto lg:ml-12 md:ml-6 ml-3 flex items-center justify-center'>
            <img
              src={hrmsLogo}
              alt='logo'
              className='rounded-full h-4/6 md:h-5/6 lg:h-5/6  mt-3 '
            />
          </div>
          <div className='ml-4 w-2/3 md:w-auto lg:w-auto flex flex-col justify-center'>
            <b className='text-xl md:text-3xl lg:text-4xl'>Hermes</b>
            <p className='text-xl md:text-xl lg:text-2xl'>
              Explore the world at your fingertips
            </p>
          </div>
        </div>
        <div
          id='explore'
          className='sm:h-auto w-full md:h-auto lg:h-4/6 flex-wrap md:flex flex-row justify-center m-auto'
        >
          <div
            id='left'
            className='w-screen md:w-5/12 lg:h-full flex flex-col items-center justify-center text-center'
          >
            <b className='text-2xl md:text-3xl lg:text-4xl'>
              EXPLORE THE WORLD!!
            </b>
            <p className='px-5'>
              Hermes expands horizons with our GPS application Go to your
              location
            </p>
            <img
              src={pointimg}
              alt='redirectToMap'
              className='w-4/6 md:w-auto md:h-4/6 lg:w-auto lg:h-4/6 my-3'
            />
          </div>
          <div
            id='right'
            className='w-screen md:w-1/2 lg:h-full flex items-center justify-center '
          >
            <img src={map} alt='mapa' className='w-full ' />
          </div>
        </div>
        <div
          id='features'
          className='h-1/2 md:h-1/3 lg:h-1/6 w-full flex flex-wrap items-center justify-center m-auto text-blue-200'
        >
          <div
            id='f1'
            className='h-1/3 md:h-1/2 lg:h-5/6 sm:w-full md:w-1/2 lg:w-1/4 pl-4 flex flex-row items-center justify-center'
          >
            <img src={ubi} alt='ubi' className='h-3/6 lg:h-4/6 mr-3' />
            <p className='w-2/3 '>Explore the world at your fingertips</p>
          </div>
          <div
            id='f2'
            className='h-1/3 md:h-1/2 lg:h-5/6 sm:w-full md:w-1/2 lg:w-1/4 pl-4 flex flex-row items-center justify-center'
          >
            <img
              src={coverage}
              alt='coverage'
              className='h-3/6 lg:h-4/6 mr-3'
            />
            <p className='w-2/3'>
              Extensive coverage of maps and points of interest
            </p>
          </div>
          <div
            id='f3'
            className='h-1/3 md:h-1/2 lg:h-5/6 sm:w-full md:w-1/2 lg:w-1/4 pl-4 flex flex-row items-center justify-center'
          >
            <img src={mas} alt='more' className='h-3/6 lg:h-4/6 mr-3' />
            <p className='w-2/3'>Additional features and customization</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeSection;
