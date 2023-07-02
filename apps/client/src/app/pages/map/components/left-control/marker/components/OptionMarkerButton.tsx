import OptionCancelButton from './OptionCancelButton';

function OptionMarkerButton({
  title,
  icon,
  isMarked,
  handleClick,
  ajustImage = ''
}: OptionMarkerButtonProps) {
  return (
    <OptionCancelButton handleClick={handleClick} isMarked={isMarked}>
      <div className='flex justify-center w-2/3'>
        <p className='font-roboto '>{title}</p>
      </div>
      <div className='grid h-full pr-[1.75px]'>
        <img
          className={`object-cover h-5 w-5 ${ajustImage}`}
          src={icon}
          alt='start icon'
          draggable='false'
        />
      </div>
    </OptionCancelButton>
  );
}

export default OptionMarkerButton;
