import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMap from '@map-contexts/map/MapState';
import { AlertColor } from '@mui/material';
import { LngLat } from 'mapbox-gl';
import { useCallback, useEffect, useState } from 'react';
import useUserMarker from './useUserMarker';

function useActualLocation() {
  const { map } = useMap();
  const [longitude, setLongitude] = useState<number | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const { setUserCoordinates } = useCoordinates();
  const [showUserMarker, setShowUserMarker] = useState(false);
  const { removeUserMarker, createMarkerFromCoordinates } = useUserMarker();
  const [isFetchingLocation, setIsFetchingLocation] = useState<boolean>(true);
  const [isLocationTimeout, setIsLocationTimeout] = useState(false);
  const [hasGeoLocation, setHasGeoLocation] = useState(false);
  const [hasGeoPermission, setHasGeoPermission] = useState<
    boolean | 'unconfirmed'
  >('unconfirmed');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState<AlertColor>('success');

  const fetchUserLocation = useCallback(() => {
    if (map.current) {
      if ('geolocation' in navigator) {
        setHasGeoLocation(true);
        setIsFetchingLocation(true);
        navigator.geolocation.getCurrentPosition(
          position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setIsFetchingLocation(false);
            setHasGeoPermission(true);
            setSnackbarType('success');
            setSnackbarMessage('Location retrieved successfully');
          },
          error => {
            setIsFetchingLocation(false);
            if (error.code === error.TIMEOUT) {
              setIsLocationTimeout(true);
              setSnackbarMessage('Location retrieval timed out');
              setSnackbarType('error');
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
      } else {
        setHasGeoLocation(false);
        setSnackbarType('warning');
        setSnackbarMessage('Geolocation is not supported by this browser');
      }
    }
  }, [map, setIsFetchingLocation]);

  useEffect(() => {
    if (isFetchingLocation) {
      fetchUserLocation();
    }
  }, [isFetchingLocation, fetchUserLocation]);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      setUserCoordinates(new LngLat(longitude, latitude));
    }
  }, [longitude, latitude, setUserCoordinates]);

  useEffect(() => {
    if (showUserMarker && latitude !== null && longitude !== null) {
      createMarkerFromCoordinates(new LngLat(longitude, latitude));
    } else {
      removeUserMarker();
    }
  }, [
    showUserMarker,
    latitude,
    longitude,
    createMarkerFromCoordinates,
    removeUserMarker
  ]);

  useEffect(() => {
    let geoWatchId: number | null = null;
    if (!isFetchingLocation && map.current) {
      if ('geolocation' in navigator) {
        geoWatchId = navigator.geolocation.watchPosition(
          position => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            setLatitude(lat);
            setLongitude(long);
          },
          error => {
            if (error.code === error.TIMEOUT) {
              setIsLocationTimeout(true);
            }
            if (error.code === error.PERMISSION_DENIED) {
              setHasGeoPermission(false);
            }
            /* eslint-disable-next-line no-console */
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000
          }
        );
      } else {
        setHasGeoLocation(false);
      }
    }
    return () => {
      if (geoWatchId) {
        navigator.geolocation.clearWatch(geoWatchId);
      }
    };
  }, [map, setUserCoordinates, showUserMarker, isFetchingLocation]);

  function goToActualLocation() {
    if (map.current && longitude !== null && latitude !== null) {
      map.current.flyTo({
        center: [longitude, latitude],
        zoom: 14
      });
    }
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
