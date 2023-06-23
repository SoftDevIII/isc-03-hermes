import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useState } from 'react';
import useActualLocation from '../../hooks/useActualLocation';
import ActualLocationButton from '../../shared-ui-components/ActualLocationButton';

function ActualLocation() {
  const { goToActualLocation, toggleUserMarker } = useActualLocation();
  const [isActive, setIsActive] = useState(true);

  function toggleActive() {
    setIsActive(prevIsActive => !prevIsActive);
    if (isActive) {
      goToActualLocation();
    }
    toggleUserMarker();
  }

  return (
    <div className='absolute right-12 bottom-48 z-10 rounded-full'>
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
