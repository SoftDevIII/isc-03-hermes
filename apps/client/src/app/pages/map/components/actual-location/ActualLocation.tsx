import MyLocationIcon from '@mui/icons-material/MyLocation';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import useActualLocation from '../../hooks/useActualLocation';
import ActualLocationButton from '../../shared-ui-components/ActualLocationButton';

function ActualLocation() {
  const {
    goToActualLocation,
    toggleUserMarker,
    isFetchingLocation,
    isLocationTimeout
  } = useActualLocation();
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
        disabled={isFetchingLocation || isLocationTimeout}
      >
        {isFetchingLocation ? (
          <CircularProgress size={24} color='inherit' />
        ) : (
          <MyLocationIcon color={isActive ? 'inherit' : 'primary'} />
        )}
      </ActualLocationButton>
    </div>
  );
}

export default ActualLocation;
