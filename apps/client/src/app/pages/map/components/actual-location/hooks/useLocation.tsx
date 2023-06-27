import useMap from '@map-contexts/map/MapState';
import { LngLat } from 'mapbox-gl';
import { useState } from 'react';
import {
  geoPermissionDeniedError,
  grantPermission,
  locationTimeoutError,
  revokePermission,
  successCurrentPosition
} from '../services/ActualLocationService';

function useLocation({
  createUserMarker,
  updateCoordinates,
  removeUserMarker
}: UseLocationProps) {
  const { map } = useMap();

  const [isFetching, setIsFetching] = useState(false);
  const [watchId, setWatchID] = useState<number>();

  const redirectToUserLocation = ({
    coordinates
  }: RedirectToUserLocationProps) => {
    if (!map.current) {
      return;
    }

    map.current.flyTo({
      center: coordinates,
      zoom: 16
    });
  };

  const removeLocation = () => {
    if (watchId === undefined) {
      return;
    }
    removeUserMarker();
    navigator.geolocation.clearWatch(watchId);
  };

  const handleErrors = ({
    error,
    setSnackbarMessage,
    setSnackbarSeverity,
    setSnackbarOpen
  }: HandleErrorsProps) => {
    if (error.code === 1) {
      geoPermissionDeniedError({
        setSnackbarMessage,
        setSnackbarSeverity
      });
    } else if (error.code === 2) {
      locationTimeoutError({
        setSnackbarMessage,
        setSnackbarSeverity
      });
    } else {
      locationTimeoutError({
        setSnackbarMessage,
        setSnackbarSeverity
      });
    }
    setSnackbarOpen(true);
  };

  const watchPosition = () => {
    setWatchID(
      navigator.geolocation.watchPosition(position => {
        const coordinates = new LngLat(
          position.coords.longitude,
          position.coords.latitude
        );
        updateCoordinates({ coordinates });
      })
    );
  };

  const fetchUserLocation = ({
    setSnackbarMessage,
    setSnackbarOpen,
    setSnackbarSeverity
  }: FetchUserLocationProps) => {
    setIsFetching(true);

    navigator.geolocation.getCurrentPosition(
      position => {
        const coordinates = new LngLat(
          position.coords.longitude,
          position.coords.latitude
        );
        successCurrentPosition({
          coordinates,
          createUserMarker,
          redirectToUserLocation,
          setSnackbarMessage,
          setSnackbarOpen,
          setSnackbarSeverity
        });
        setIsFetching(false);
        watchPosition();
      },
      error => {
        handleErrors({
          error,
          setSnackbarMessage,
          setSnackbarSeverity,
          setSnackbarOpen
        });
        setIsFetching(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000
      }
    );
  };

  const getPermissions = async ({
    setSnackbarMessage,
    setSnackbarOpen,
    setSnackbarSeverity,
    setIsDisabled
  }: ReturnLocationProps) => {
    const permissions = await navigator.permissions.query({
      name: 'geolocation'
    });
    if (permissions.state === 'granted') {
      grantPermission({
        setSnackbarMessage,
        setSnackbarOpen,
        setSnackbarSeverity,
        setIsDisabled
      });
    } else if (permissions.state === 'prompt') {
      navigator.geolocation.getCurrentPosition(
        () => {
          grantPermission({
            setSnackbarMessage,
            setSnackbarOpen,
            setSnackbarSeverity,
            setIsDisabled
          });
        },
        () => {
          revokePermission({
            setSnackbarMessage,
            setSnackbarOpen,
            setSnackbarSeverity
          });
        }
      );
    } else {
      revokePermission({
        setSnackbarMessage,
        setSnackbarOpen,
        setSnackbarSeverity
      });
    }
  };

  return {
    isFetching,
    fetchUserLocation,
    getPermissions,
    removeLocation
  };
}

export default useLocation;
