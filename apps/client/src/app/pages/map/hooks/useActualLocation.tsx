import useMap from '../context/map/MapState';

function useActualLocation() {
  const { map } = useMap();
  function goToActualLocation() {
    if (map.current) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        map.current?.jumpTo({
          center: [long, lat],
          zoom: 15
        });
      });
    }
  }
  return { goToActualLocation };
}

export default useActualLocation;
