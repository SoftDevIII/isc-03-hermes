function SubmitButton() {
  return (
    <div className='w-full flex items-center justify-center'>
      <input
        className='bg-slate-400 text-white font-bold shadow-2xl
        rounded-lg px-3 mt-2 transition duration-100 active:transform
        active:scale-90 cursor-pointer hover:bg-slate-500/80
        active:bg-slate-500'
        type='submit'
      />
    </div>
  );
}

export default SubmitButton;
