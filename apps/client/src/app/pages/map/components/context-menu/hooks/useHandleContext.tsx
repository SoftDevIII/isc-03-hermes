import useMap from '@map-contexts/map/MapState';
import { LngLat, PointLike } from 'mapbox-gl';

const useHandleContext = ({ setMenu }: UseHandleContextMenuProps) => {
  const { map } = useMap();

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const point: PointLike = [e.clientX, e.clientY];
    const lngLat = map.current?.unproject(point).toArray();

    if (!lngLat) {
      setMenu(null);
      return;
    }

    const lngLatObj = new LngLat(lngLat[0], lngLat[1]);

    let left = false;
    let up = false;

    if (e.clientX > 950) {
      left = true;
    }

    if (e.clientY > 600) {
      up = true;
    }

    setMenu({
      x: e.clientX,
      y: e.clientY,
      lngLat: lngLatObj,
      left,
      up
    });
  };

  const hideMenu = () => {
    setMenu(null);
  };

  return { handleContextMenu, hideMenu };
};

export default useHandleContext;
