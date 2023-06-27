import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Alert, AlertColor, CircularProgress, Snackbar } from '@mui/material';
import { Marker } from 'mapbox-gl';
import { useEffect, useState } from 'react';
import useMap from '../../contexts/map/MapState';
import ActualLocationButton from './components/ActualLocationButton';
import useLocation from './hooks/useLocation';
import useUserMarker from './hooks/useUserMarker';

function ActualLocation() {
  const { isLoading } = useMap();

  const [isDisabled, setIsDisabled] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('');
  const [marker, setMarker] = useState<Marker>(new Marker());
  const [isMarked, setIsMarked] = useState(false);

  const { createUserMarker, removeUserMarker, updateCoordinates } =
    useUserMarker({
      marker,
      setMarker,
      setIsMarked
    });
  const { isFetching, fetchUserLocation, getPermissions, removeLocation } =
    useLocation({
      createUserMarker,
      removeUserMarker,
      updateCoordinates
    });

  const handleFetchLocation = () => {
    if (isMarked) {
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
    <div className='absolute right-6 bottom-40 rounded-full md:right-8 md:bottom-44'>
      <span>
        <ActualLocationButton
          onClick={() => handleFetchLocation()}
          disabled={isDisabled || isFetching}
        >
          {isFetching ? (
            <CircularProgress size={24} color='inherit' />
          ) : (
            <MyLocationIcon color={isMarked ? 'primary' : 'inherit'} />
          )}
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
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ActualLocation;
