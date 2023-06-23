import things from 'public/cosas.svg';
import map from 'public/mapStreets.svg';

function Section3() {
  return (
    <div className='flex h-screen bg-gradient-to-b from-blue-200 to-indigo-950'>
      <div className='w-full flex flex-col text-3xl'>
        <div id='mapPart' className='h-1/2 flex flex-row'>
          <div className='w-1/2 flex flex-col items-center'>
            <img src={map} alt='map' className='mt-3 h-full' />
          </div>
          <div className='w-1/2 flex items-center text-6xl text-center m-24'>
            You can obtain primary and alternative routes for the same address
          </div>
        </div>
        <div id='thingsPart' className='h-1/2 flex flex-row'>
          <div className='w-1/2 flex items-center text-6xl text-center m-24'>
            Obtain time estimates for various modes of transportation to reach
            our destination.
          </div>
          <div className='w-1/2 flex flex-col items-center'>
            <img src={things} alt='things' className='mt-3 h-full' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section3;
