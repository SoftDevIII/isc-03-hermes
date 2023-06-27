import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMap from '@map-contexts/map/MapState';
import { AlertColor } from '@mui/material';
import { LngLat } from 'mapbox-gl';
import { useCallback, useEffect, useState } from 'react';
import useUserMarker from './useUserMarker';

function useActualLocation() {
  const { map } = useMap();
  const { setUserCoordinates } = useCoordinates();
  const { removeUserMarker, createMarkerFromCoordinates } = useUserMarker();

  const [lngLat, setLngLat] = useState<LngLat | null>(null);
  const [showUserMarker, setShowUserMarker] = useState(false);
  const [isFetchingLocation, setIsFetchingLocation] = useState<boolean>(true);
  const [isLocationTimeout, setIsLocationTimeout] = useState(false);
  const [hasGeoLocation, setHasGeoLocation] = useState(false);
  const [hasGeoPermission, setHasGeoPermission] = useState<
    boolean | 'unconfirmed'
  >('unconfirmed');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState<AlertColor>('success');

  const fetchUserLocation = useCallback(() => {
    if (!map.current) {
      return;
    }

    if (!('geolocation' in navigator)) {
      setHasGeoLocation(false);
      setSnackbarType('warning');
      setSnackbarMessage('Geolocation is not supported by this browser');
      return;
    }

    setHasGeoLocation(true);
    setIsFetchingLocation(true);

    navigator.geolocation.getCurrentPosition(
      position => {
        setIsFetchingLocation(false);
        setLngLat(
          new LngLat(position.coords.longitude, position.coords.latitude)
        );
        setHasGeoPermission(true);
        setSnackbarType('success');
        setSnackbarMessage('Location retrieved successfully');
      },
      error => {
        setIsFetchingLocation(false);

        if (error.code === error.TIMEOUT) {
          setIsLocationTimeout(true);
          setSnackbarType('error');
          setSnackbarMessage('Location retrieval timed out');
        }

        if (error.code === error.PERMISSION_DENIED) {
          setHasGeoPermission(false);
          setSnackbarType('error');
          setSnackbarMessage('Location permission denied');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000
      }
    );
  }, [map, setIsFetchingLocation]);

  useEffect(() => {
    if (!isFetchingLocation) {
      return;
    }

    fetchUserLocation();
  }, [isFetchingLocation, fetchUserLocation]);

  useEffect(() => {
    if (lngLat === null) {
      return;
    }

    setUserCoordinates(lngLat);
  }, [setUserCoordinates, lngLat]);

  useEffect(() => {
    if (!showUserMarker || lngLat === null) {
      removeUserMarker();
      return;
    }

    createMarkerFromCoordinates(lngLat);
  }, [removeUserMarker, showUserMarker, createMarkerFromCoordinates, lngLat]);

  useEffect(() => {
    let geoWatchId: number | null = null;

    if (isFetchingLocation || !map.current) {
      return () => {};
    }

    if (!('geolocation' in navigator)) {
      setHasGeoLocation(false);
      return () => {};
    }

    geoWatchId = navigator.geolocation.watchPosition(
      position => {
        setLngLat(
          new LngLat(position.coords.longitude, position.coords.latitude)
        );
      },
      error => {
        if (error.code === error.TIMEOUT) {
          setIsLocationTimeout(true);
        }
        if (error.code === error.PERMISSION_DENIED) {
          setHasGeoPermission(false);
        }
        throw new Error(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000
      }
    );

    return () => {
      if (geoWatchId) {
        navigator.geolocation.clearWatch(geoWatchId);
      }
    };
  }, [map, setUserCoordinates, showUserMarker, isFetchingLocation]);

  function goToActualLocation() {
    if (!map.current || lngLat === null) {
      return;
    }

    map.current.flyTo({
      center: [lngLat.lng, lngLat.lat],
      zoom: 14
    });
  }

  return {
    goToActualLocation,
    toggleUserMarker: () => setShowUserMarker(!showUserMarker),
    isFetchingLocation,
    isLocationTimeout,
    hasGeoLocation,
    hasGeoPermission,
    snackbarMessage,
    snackbarType
  };
}

export default useActualLocation;
