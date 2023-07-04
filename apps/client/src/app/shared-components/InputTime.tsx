function InputTime({ onChange, children, data }: InputTimeProps) {
  return (
    <div className='flex flex-col gap-1'>
      <p className='text-white'>{children}</p>
      <div className='flex gap-2'>
        <div className='flex gap-1'>
          <p className='text-white'>Hours: </p>
          <div className='flex gap-2 w-full bg-black/40 py-[6px] px-3 rounded-lg'>
            <input
              type='number'
              className='text-white w-full h-full outline-none bg-transparent'
              name='hours'
              value={data.hours}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className='flex gap-1'>
          <p className='text-white'>Mins: </p>
          <div className='flex gap-2 w-full bg-black/40 py-[6px] px-3 rounded-lg'>
            <input
              type='number'
              className='text-white w-full h-full outline-none bg-transparent'
              name='mins'
              value={data.mins}
              onChange={onChange}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputTime;
