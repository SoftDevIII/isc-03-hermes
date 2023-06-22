import { LngLat } from 'mapbox-gl';
import { useEffect, useState } from 'react';
import useCoordinates from '../context/coordinates/CoordinatesState';
import useMap from '../context/map/MapState';

function useActualLocation() {
  const { map } = useMap();
  const [longitude, setLongitude] = useState<number | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const { setUserCoordinates } = useCoordinates();

  useEffect(() => {
    let geoWatchId: number | null = null;
    if (map.current) {
      geoWatchId = navigator.geolocation.watchPosition(
        position => {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          setLatitude(lat);
          setLongitude(long);
          setUserCoordinates(new LngLat(long, lat));
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
  }, [map, setUserCoordinates]);
  function goToActualLocation() {
    if (map.current && longitude !== null && latitude !== null) {
      map.current.flyTo({
        center: [longitude, latitude],
        zoom: 14
      });
    }
  }
  return { goToActualLocation };
}

export default useActualLocation;
