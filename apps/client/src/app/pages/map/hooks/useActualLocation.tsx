import { LngLat } from 'mapbox-gl';
import { useEffect, useState } from 'react';
import useCoordinates from '../context/coordinates/CoordinatesState';
import useMap from '../context/map/MapState';
import useUserMarker from './useUserMarker';

function useActualLocation() {
  const { map } = useMap();
  const [longitude, setLongitude] = useState<number | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const { setUserCoordinates } = useCoordinates();
  const [showUserMarker, setShowUserMarker] = useState(false);
  const { setUserMarker, removeUserMarker, createMarkerFromCoordinates } =
    useUserMarker();

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
    removeUserMarker,
    setUserMarker
  ]);

  useEffect(() => {
    let geoWatchId: number | null = null;
    if (map.current) {
      geoWatchId = navigator.geolocation.watchPosition(
        position => {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          setLatitude(lat);
          setLongitude(long);
        },
        error => {
          /* eslint-disable-next-line no-console */
          console.log(error);
        },
        {
          enableHighAccuracy: true
        }
      );
    }
    return () => {
      if (geoWatchId) {
        navigator.geolocation.clearWatch(geoWatchId);
      }
    };
  }, [
    map,
    setUserCoordinates,
    showUserMarker,
    setUserMarker,
    removeUserMarker
  ]);

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
    toggleUserMarker: () => setShowUserMarker(!showUserMarker)
  };
}

export default useActualLocation;
