import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useState } from 'react';
import ActualLocationButton from '../../shared-ui-components/ActualLocationButton';
import useActualLocation from '../../hooks/useActualLocation';

function ActualLocation() {
  const { goToActualLocation } = useActualLocation();
  const [isActive, setIsActive] = useState(true);

  function toggleActive() {
    setIsActive(prevIsActive => !prevIsActive);
    if (isActive) {
      goToActualLocation();
    }
  }

  return (
    <div className='absolute right-12 bottom-40 z-10 rounded-full'>
      <ActualLocationButton
        onClick={() => {
          toggleActive();
        }}
      >
        <MyLocationIcon color={isActive ? 'inherit' : 'primary'} />
      </ActualLocationButton>
    </div>
  );
}

export default ActualLocation;
