import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Alert, CircularProgress, Snackbar } from '@mui/material';
import { useState } from 'react';
import useMap from '../../contexts/map/MapState';
import ActualLocationButton from './components/ActualLocationButton';
import useActualLocation from './hooks/useActualLocation';

function ActualLocation() {
  const { isLoading } = useMap();
  const {
    goToActualLocation,
    toggleUserMarker,
    isFetchingLocation,
    isLocationTimeout,
    hasGeoLocation,
    hasGeoPermission,
    snackbarMessage,
    snackbarType
  } = useActualLocation();

  const [isActive, setIsActive] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  if (isLoading) {
    return <div />;
  }

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

  return (
    <div className='absolute right-6 bottom-40 rounded-full md:right-8 md:bottom-44'>
      <span>
        <ActualLocationButton
          onClick={() => {
            if (disabled) {
              setSnackbarOpen(true);
            } else {
              toggleActive();
              setSnackbarOpen(true);
            }
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarType}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ActualLocation;
