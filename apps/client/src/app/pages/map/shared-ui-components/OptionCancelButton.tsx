import closeIcon from '@assets/close-icon.png';
import useCoordinates from '../context/coordinates/CoordinatesState';
import Button from './Button';

function OptionCancelButton({
  children,
  handleClick,
  isMarked
}: OptionCancelButtonProps) {
  const { isMarking } = useCoordinates();

  return (
    <Button
      onClick={() => handleClick()}
      className={`relative w-[105px] py-2 px-3.5 rounded-2xl bg-black/70
      text-white font-semibold shadow-2xl flex items-center justify-between ${
        isMarking ? '' : 'hover:bg-black/80 active:bg-black'
      }`}
      disabled={isMarking}
    >
      {children}
      {isMarked && (
        <div className='absolute right-[7.3px] top-[6.3px] h-[8.5px] w-[8.5px] opacity-70 cursor-pointer'>
          <img src={closeIcon} alt='exit icon' draggable='false' />
        </div>
      )}
    </Button>
  );
}

export default OptionCancelButton;
