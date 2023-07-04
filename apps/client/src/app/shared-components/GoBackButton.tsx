import { useNavigate } from 'react-router-dom';
import Button from '@map-shared-components/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      className='bg-slate-400 text-white font-bold shadow-2xl
      rounded-lg px-3 mt-2 transition duration-100 active:transform
      active:scale-90 cursor-pointer hover:bg-slate-500/80
      active:bg-slate-500'
    >
      <ArrowBackIcon />
    </Button>
  );
}

export default GoBackButton;
