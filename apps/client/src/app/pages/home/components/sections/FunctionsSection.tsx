import map from '@home-assets/mapStreets.svg';
import things from '@home-assets/typeOfMovements.svg';

function FunctionsSection() {
  return (
    <div
      id='Functions'
      className='w-full flex bg-gradient-to-b from-blue-200 to-indigo-950 font-roboto'
    >
      <div
        className='w-full min-h-screen h-auto md:h-auto lg:h-screen flex flex-col
      text-xl md:text-3xl lg:text-5xl text-center'
      >
        <div
          id='mapPart'
          className='h-1/2 w-full flex flex-wrap flex-row items-center justify-center'
        >
          <div className='w-5/6 md:w-1/2 lg:w-5/12 lg:h-5/6 flex items-center justify-center'>
            <img src={map} alt='map' className='mt-3 h-full' />
          </div>
          <div className='w-11/12 md:w-1/2 lg:w-7/12 flex'>
            You can obtain primary and alternative routes for the same address.
          </div>
        </div>
        <div
          id='thingsPart'
          className='h-1/2 w-full flex flex-wrap flex-row items-center justify-center mt-12'
        >
          <div className='w-11/12 md:w-1/2 lg:w-7/12 flex items-center justify-center'>
            Obtain time estimates for various modes of transportation to reach
            our destination.
          </div>
          <div className='w-5/6 md:w-1/2 lg:w-5/12 lg:h-5/6 flex items-center justify-center'>
            <img src={things} alt='things' className='mt-3 h-full' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FunctionsSection;
