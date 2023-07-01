import Button from '@map-shared-components/Button';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import useMapCentering from './hook/MapCentering';

function CompassButton() {
  const { handleCompassClick } = useMapCentering();

  const handleClick = () => {
    handleCompassClick();
  };

  return (
    <div className='absolute right-6 bottom-40 rounded-full md:right-8 md:bottom-40'>
      <span>
        <Button
          onClick={handleClick}
          className='h-12 w-12 rounded-full bg-black/50 text-white sm:w-10 sm:h-10 sm:text-[24px] grid place-items-center hover:bg-black/70 active:bg-black/90'
        >
          <ExploreOutlinedIcon />
        </Button>
      </span>
    </div>
  );
}

export default CompassButton;
