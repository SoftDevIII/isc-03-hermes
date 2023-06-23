import pointimg from 'public/Image2.png';
import full from 'public/full.svg';
import hrmsLogo from 'public/hrmsBoots.jpeg';
import map from 'public/map 3.png';
import mas from 'public/mas.svg';
import ubi from 'public/ubi.svg';
import FontRoboto from '../resurces/Fonts';

function Section1() {
  return (
    <div
      id='section'
      className='flex h-screen bg-gradient-to-b from-blue-200 to-indigo-950 '
      style={FontRoboto(true)}
    >
      <div className='w-full flex flex-col'>
        <div id='head' className='h-1/6 flex'>
          <img
            src={hrmsLogo}
            alt='logo'
            className='rounded-full h-5/6 ml-6 mt-3 '
          />
          <div className='mt-7 ml-4'>
            <b className='text-5xl'>Hermes</b>
            <p className='text-3xl'>Explore the world at your fingertips</p>
          </div>
        </div>
        <div id='explore' className='h-4/6 flex flex-row'>
          <div id='left' className='w-1/2 m-4 flex flex-col items-center'>
            <b className='text-5xl'>EXPLORE THE WORLD!!</b>
            <p>
              Hermes expands horizons with our GPS application Go to your
              location
            </p>
            <img
              src={pointimg}
              alt='redirectToMap'
              className='h-5/6 ml-4 mt-3'
            />
          </div>
          <div id='right' className='w-1/2 align-middle'>
            <img src={map} alt='mapa' className='rounded-full h-auto  mt-3' />
          </div>
        </div>
        <div
          id='features'
          className='h-1/6 flex items-center'
          style={FontRoboto(false)}
        >
          <img src={ubi} alt='ubi' className='h-4/6 ml-4 mt-3' />
          <p className='m-4 w-1/11'>Explore the world at your fingertips</p>
          <img src={mas} alt='mapa' className='h-4/6 ml-4 mt-3' />
          <p className=' m-4 w-1/11'>
            Extensive coverage of maps and points of interest
          </p>
          <img src={full} alt='full' className='h-4/6 ml-4 mt-3' />
          <p className='m-4 w-1/11'>Additional features and customization</p>
        </div>
      </div>
    </div>
  );
}
export default Section1;
