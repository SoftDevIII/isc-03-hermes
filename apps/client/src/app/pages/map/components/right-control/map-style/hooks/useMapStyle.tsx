import useMap from '@map-contexts/map/MapState';

function useMapStyle() {
  const { map } = useMap();

  const handleStyleClick = (style: string) => {
    if (map) {
      map.current?.setStyle(`mapbox://styles/mapbox/${style}-v9`);
    }
  };
  return { handleStyleClick };
}

export default useMapStyle;
