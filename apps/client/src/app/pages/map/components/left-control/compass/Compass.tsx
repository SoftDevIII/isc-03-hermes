import Button from '@map-shared-components/Button';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import useMapCentering from './hook/MapCentering';

function Compass() {
  const { handleCompassClick } = useMapCentering();

  return (
    <div>
      <Button
        onClick={handleCompassClick}
        className='h-12 w-12 rounded-full bg-black/50 text-white sm:w-10 sm:h-10 sm:text-[24px]
        grid place-items-center hover:bg-black/70 active:bg-black/90 content-center'
      >
        <ExploreOutlinedIcon />
      </Button>
    </div>
  );
}

export default Compass;
