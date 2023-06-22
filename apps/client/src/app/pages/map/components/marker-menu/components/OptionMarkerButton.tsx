import useCoordinates from '../../../context/coordinates/CoordinatesState';
import OptionCancelButton from '../../../shared-ui-components/OptionCancelButton';

function OptionMarkerButton({
  title,
  isOpen,
  setIsOpen,
  icon,
  onClick,
  ajustImage = '',
  disabled
}: OptionMarkerButtonProps) {
  const { startCoordinates, endCoordinates } = useCoordinates();

  return (
    <OptionCancelButton
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClick={onClick}
      disabled={disabled}
      isMarked={title === 'Start' ? !!startCoordinates : !!endCoordinates}
      title={title}
    >
      <div className='flex justify-center items-center w-2/3'>
        <div>{title}</div>
      </div>
      <div className='flex justify-center items-center pr-[1.75px]'>
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
