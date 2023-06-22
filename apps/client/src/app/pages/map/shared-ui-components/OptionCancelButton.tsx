import xIcon from '@assets/x-icon.png';
import Button from './Button';

function OptionCancelButton({
  isOpen,
  setIsOpen,
  onClick,
  children,
  disabled,
  isMarked,
  title
}: OptionCancelButtonProps) {
  const handleClick = () => {
    if (title === 'Start') {
      if (!isMarked) {
        onClick('setStartMarker');
      } else {
        onClick('removeStartMarker');
      }
    } else if (title === 'End') {
      if (!isMarked) {
        onClick('setEndMarker');
      } else {
        onClick('removeEndMarker');
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <Button
      onClick={handleClick}
      className={`relative w-[105px] py-2 px-3.5 rounded-2xl bg-black/70
      text-white font-semibold shadow-2xl flex items-center justify-between ${
        disabled ? '' : 'hover:bg-black/80 active:bg-black'
      }`}
      disabled={disabled}
    >
      {children}
      {isMarked && (
        <div className='absolute right-[7.3px] top-[6.3px] h-[8.5px] w-[8.5px] opacity-70 cursor-pointer'>
          <img src={xIcon} alt='exit icon' draggable='false' />
        </div>
      )}
    </Button>
  );
}

export default OptionCancelButton;
