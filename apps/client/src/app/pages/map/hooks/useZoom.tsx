import useMap from '../context/map/MapState';

function useZoom() {
  const { map } = useMap();

  function increaseZoom() {
    if (!map.current) return;
    map.current.zoomIn();
  }

  function decreaseZoom() {
    if (!map.current) return;
    map.current.zoomOut();
  }

  return { increaseZoom, decreaseZoom };
}
export default useZoom;
