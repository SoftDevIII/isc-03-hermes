import world from '@map-assets/world.svg';

function Loading() {
  return (
    <div className='h-screen bg-slate-800 grid place-items-center content-center'>
      <div className='text-[10px] flex h-[10rem] w-[10rem] animate-pulse'>
        <img src={world} alt='world icon' draggable={false} />
      </div>
      <div className='flex mt-5 place-items-center gap-4 '>
        <p
          className='h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem] animate-spin
          backdrop:animate-spin rounded-full border-4 border-solid border-current border-r-transparent 
        text-success motion-reduce:animate-[spin_1.5s_linear_infinite] text-white/60'
        />
        <p className='font-roboto text-white/60 font-bold text-[1.5rem] md:text-[2rem]'>
          Loading Map...
        </p>
      </div>
    </div>
  );
}

export default Loading;
