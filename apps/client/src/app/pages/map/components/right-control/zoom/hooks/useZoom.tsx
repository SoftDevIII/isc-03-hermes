import useMap from '@map-contexts/map/MapState';

function useZoom() {
  const { map, actualZoom } = useMap();

  function increaseZoom() {
    if (!map.current) return;
    map.current.zoomIn();
  }

  function decreaseZoom() {
    if (!map.current) return;
    map.current.zoomOut();
  }

  return { increaseZoom, decreaseZoom, actualZoom };
}
export default useZoom;
