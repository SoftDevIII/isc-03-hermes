import useCoordinatesProvider from '@map-contexts/coordinates/hooks/useCoordinatesProvider';
import useMap from '@map-contexts/map/MapState';
import { LngLat, PointLike } from 'mapbox-gl';
import { LegacyRef, useState } from 'react';
import ContextMenu from '../context-menu/ContextMenu';
import Loading from '../loading/Loading';

function MapComponent() {
  const { isLoading, container, map } = useMap();
  const [menu, setMenu] = useState<{
    x: number;
    y: number;
    lngLat?: LngLat;
  } | null>(null);
  const { setContextMenuCoordinates } = useCoordinatesProvider();

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const point: PointLike = [e.clientX, e.clientY];
    const lngLat = map.current?.unproject(point).toArray();

    if (lngLat) {
      const lngLatObj = new LngLat(lngLat[0], lngLat[1]);
      setContextMenuCoordinates(lngLatObj);

      setMenu({
        x: e.clientX,
        y: e.clientY,
        lngLat: new LngLat(lngLat[0], lngLat[1])
      });
    } else {
      setMenu({
        x: e.clientX,
        y: e.clientY
      });
    }
  };
  const hideMenu = () => setMenu(null);
  return (
    <div onContextMenu={handleContextMenu}>
      <div
        ref={container as LegacyRef<HTMLDivElement>}
        className='absolute z-0 h-screen w-full mapContainer'
      />
      {isLoading && <Loading />}
      {menu && menu.lngLat && (
        <ContextMenu
          x={menu.x}
          y={menu.y}
          lngLat={menu.lngLat}
          hideMenu={hideMenu}
        />
      )}
    </div>
  );
}

export default MapComponent;
