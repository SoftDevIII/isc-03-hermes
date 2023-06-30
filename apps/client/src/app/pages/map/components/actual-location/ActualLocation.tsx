import useMap from '@map-contexts/map/MapState';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Alert, AlertColor, CircularProgress, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import useCoordinates from '../../contexts/coordinates/CoordinatesState';
import useMarkers from '../../contexts/markers/MarkersState';
import ActualLocationButton from './components/ActualLocationButton';
import useLocation from './hooks/useLocation';

function ActualLocation() {
  const { isLoading } = useMap();
  const {
    createUserMarkerCoordinates,
    removeUserMarker,
    updateUserMarkerCoordinates
  } = useMarkers();
  const { userCoordinates } = useCoordinates();

  const [isDisabled, setIsDisabled] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('');
  const { isFetching, fetchUserLocation, getPermissions, removeLocation } =
    useLocation({
      createUserMarkerCoordinates,
      removeUserMarker,
      updateUserMarkerCoordinates
    });

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

  if (isLoading) {
    return <div />;
  }

  return (
    <div className='absolute left-6 bottom-4 rounded-full md:left-8 md:bottom-8'>
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
          severity={snackbarSeverity as AlertColor}
          style={{ backgroundColor: '#14171b', color: 'white', opacity: 0.9 }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ActualLocation;
