/* eslint-disable @typescript-eslint/no-misused-promises */
import Button from '@map-shared-components/Button';
import SendIcon from '@mui/icons-material/Send';
import useDrawRoute from '../hooks/useDrawRoute';

function StartButton() {
  const handleOnClick = useDrawRoute();

  return (
    <div className='bg-black/50 rounded-xl text-white font-bold font-roboto flex shadow-2xl mr-[16.5px]'>
      <Button
        className='px-5 py-2 font-roboto flex gap-2 items-center shadow-2xl'
        onClick={() => handleOnClick()}
      >
        <div className='rotate-[-90deg] text-cyan-600 grid place-items-center content-center'>
          <SendIcon />
        </div>
        Start
      </Button>
    </div>
  );
}

export default StartButton;
