import world from '@map-assets/world.svg';

function Loading() {
  return (
    <div className='z-10 h-screen bg-gradient-to-r from-slate-900 to-slate-700 grid place-items-center content-center absolute w-full'>
      <div className='text-[10px] flex h-[10rem] w-[10rem] animate-pulse'>
        <img src={world} alt='world icon' draggable={false} />
      </div>
      <div className='flex mt-5 place-items-center gap-4'>
        <p className='animate-pulse font-roboto text-white/90 font-bold text-[1.5rem] md:text-[2rem]'>
          Loading ...
        </p>
      </div>
    </div>
  );
}

export default Loading;
