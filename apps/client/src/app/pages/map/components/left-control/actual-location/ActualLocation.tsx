import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMarkers from '@map-contexts/markers/MarkersState';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Alert, CircularProgress, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import ActualLocationButton from './components/ActualLocationButton';
import useLocation from './hooks/useLocation';

function ActualLocation() {
  const {
    createUserMarkerCoordinates,
    removeUserMarker,
    updateUserMarkerCoordinates
  } = useMarkers();
  const { userCoordinates } = useCoordinates();
  const { isFetching, fetchUserLocation, getPermissions, removeLocation } =
    useLocation({
      createUserMarkerCoordinates,
      removeUserMarker,
      updateUserMarkerCoordinates
    });

  const [isDisabled, setIsDisabled] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('');

  const handleFetchLocation = () => {
    if (userCoordinates) {
      removeLocation();
      return;
    }

    fetchUserLocation({
      setSnackbarMessage,
      setSnackbarOpen,
      setSnackbarSeverity
    });
  };

  useEffect(() => {
    getPermissions({
      setSnackbarMessage,
      setSnackbarOpen,
      setSnackbarSeverity,
      setIsDisabled
    })
      .then()
      .catch((error: Error) => {
        throw new Error(error.message);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <span>
        <ActualLocationButton
          onClick={() => handleFetchLocation()}
          disabled={isDisabled || isFetching}
        >
          <div className='sm:w-10 sm:h-10 sm:text-[24px] grid place-items-center'>
            {isFetching ? (
              <CircularProgress size={24} color='inherit' />
            ) : (
              <MyLocationIcon color={userCoordinates ? 'primary' : 'inherit'} />
            )}
          </div>
        </ActualLocationButton>
      </span>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity === 'success' ? 'success' : 'error'}
          style={{ backgroundColor: '#14171b', color: 'white', opacity: 0.9 }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ActualLocation;
