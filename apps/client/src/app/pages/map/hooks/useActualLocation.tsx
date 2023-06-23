import { LngLat } from 'mapbox-gl';
import { useCallback, useEffect, useState } from 'react';
import useCoordinates from '../context/coordinates/CoordinatesState';
import useMap from '../context/map/MapState';
import { MAX_ZOOM } from '../utils/constants';
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
  const [hasGeoLocation, setHasGeoLocation] = useState(true);
  const [hasGeoPermission, setHasGeoPermission] = useState(true);

  const fetchUserLocation = useCallback(() => {
    if (map.current) {
      if ('geolocation' in navigator) {
        setIsFetchingLocation(true);
        navigator.geolocation.getCurrentPosition(
          position => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setIsFetchingLocation(false);
          },
          error => {
            if (error.code === error.TIMEOUT) {
              setIsLocationTimeout(true);
            }
            if (error.code === error.PERMISSION_DENIED) {
              /* eslint-disable-next-line no-alert */
              alert(
                'You have denied access to your location. Please allow access to your location to use this feature.'
              );
              setHasGeoPermission(false);
            }
            /* eslint-disable-next-line no-console */
            console.error(error);
            setIsFetchingLocation(false);
          },
          {
            enableHighAccuracy: true,
            timeout: 50000
          }
        );
      } else {
        /* eslint-disable-next-line no-alert */
        alert('Geolocation is not supported by your browser');
        setHasGeoLocation(false);
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
              /* eslint-disable-next-line no-alert */
              alert('User has denied location permissions.');
              setHasGeoPermission(false);
            }
            /* eslint-disable-next-line no-console */
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 50000
          }
        );
      } else {
        /* eslint-disable-next-line no-alert */
        alert('Geolocation is not supported by your browser');
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
        zoom: MAX_ZOOM
      });
    }
  }
  return {
    goToActualLocation,
    toggleUserMarker: () => setShowUserMarker(!showUserMarker),
    isFetchingLocation,
    isLocationTimeout,
    hasGeoLocation,
    hasGeoPermission
  };
}

export default useActualLocation;
