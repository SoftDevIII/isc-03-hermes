import MyLocationIcon from '@mui/icons-material/MyLocation';
import { CircularProgress, Tooltip } from '@mui/material';
import { useState } from 'react';
import ActualLocationButton from './components/ActualLocationButton';
import useActualLocation from './hooks/useActualLocation';

function ActualLocation() {
  const {
    goToActualLocation,
    toggleUserMarker,
    isFetchingLocation,
    isLocationTimeout,
    hasGeoLocation,
    hasGeoPermission
  } = useActualLocation();
  const [isActive, setIsActive] = useState(true);

  function toggleActive() {
    setIsActive(prevIsActive => !prevIsActive);
    if (isActive) {
      goToActualLocation();
    }
    toggleUserMarker();
  }

  const disabled =
    isFetchingLocation ||
    isLocationTimeout ||
    !hasGeoLocation ||
    !hasGeoPermission;
  let title = '';
  if (disabled) {
    if (!hasGeoLocation) {
      title = 'Geolocation is not supported by your device or browser';
    } else if (!hasGeoPermission) {
      title = 'Location permission is not granted';
    } else if (isLocationTimeout) {
      title = 'Location retrieval has timed out';
    } else if (isFetchingLocation) {
      title = 'Retrieving location...';
    }
  }
  return (
    <div className='absolute right-6 bottom-40 rounded-full md:right-8 md:bottom-44'>
      <Tooltip title={title} placement='left'>
        <span>
          <ActualLocationButton
            onClick={() => {
              toggleActive();
            }}
            disabled={disabled}
          >
            {isFetchingLocation ? (
              <CircularProgress size={24} color='inherit' />
            ) : (
              <MyLocationIcon color={isActive ? 'inherit' : 'primary'} />
            )}
          </ActualLocationButton>
        </span>
      </Tooltip>
    </div>
  );
}

export default ActualLocation;
