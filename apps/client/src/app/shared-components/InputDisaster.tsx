function InputDisaster({
  isTime = false,
  children,
  name,
  value,
  onChange
}: InputDisasterProps) {
  return (
    <div className='flex flex-col gap-1'>
      <p className='text-white'>{children}</p>
      <div className='flex gap-2 w-full bg-black/40 py-[6px] px-3 rounded-lg'>
        <input
          type={`${isTime ? 'time' : 'text'}`}
          className='text-white w-full h-full outline-none bg-transparent'
          name={name}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}

export default InputDisaster;
