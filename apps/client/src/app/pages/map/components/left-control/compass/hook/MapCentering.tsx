import useMap from '@map-contexts/map/MapState';

function useMapCentering() {
  const { map } = useMap();

  const handleCompassClick = () => {
    if (map.current) {
      map.current.flyTo({
        bearing: 0,
        pitch: 0
      });
    }
  };

  return { handleCompassClick };
}

export default useMapCentering;
