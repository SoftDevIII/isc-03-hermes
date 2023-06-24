import { LngLat } from 'mapbox-gl';
import { useCallback, useEffect, useState } from 'react';
import useCoordinates from '../context/coordinates/CoordinatesState';
import useMap from '../context/map/MapState';
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

  const fetchUserLocation = useCallback(() => {
    if (map.current) {
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
          /* eslint-disable-next-line no-console */
          console.error(error);
          setIsFetchingLocation(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 50000
        }
      );
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
          /* eslint-disable-next-line no-console */
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 50000
        }
      );
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
    isLocationTimeout
  };
}

export default useActualLocation;
