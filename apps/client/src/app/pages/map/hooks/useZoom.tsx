import useBounds from '../context/bounds/BoundsState';
import useMap from '../context/map/MapState';

function useZoom() {
  const { map } = useMap();
  const { isOutBounds, setIsOutBounds } = useBounds();

  function increaseZoom() {
    if (!map.current) return;
    if (map.current.getZoom() === map.current.getMaxZoom() && !isOutBounds) {
      setIsOutBounds(true);
      return;
    }
    map.current.zoomIn();
  }

  function decreaseZoom() {
    if (!map.current) return;
    if (map.current.getZoom() === map.current.getMinZoom() && !isOutBounds) {
      setIsOutBounds(true);
      return;
    }
    map.current.zoomOut();
  }

  return { increaseZoom, decreaseZoom };
}
export default useZoom;
