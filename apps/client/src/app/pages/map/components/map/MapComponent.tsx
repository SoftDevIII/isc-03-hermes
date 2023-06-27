import useMap from '@map-contexts/map/MapState';
import { LegacyRef, useState } from 'react';
import ContextMenu from '../context-menu/ContextMenu';
import Loading from '../loading/Loading';

function MapComponent() {
  const { isLoading, container } = useMap();
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMenu({ x: e.clientX, y: e.clientY });
  };
  const hideMenu = () => setMenu(null);
  return (
    <div onContextMenu={handleContextMenu}>
      <div
        ref={container as LegacyRef<HTMLDivElement>}
        className='absolute z-0 h-screen w-full mapContainer'
      />
      {isLoading && <Loading />}
      {menu && <ContextMenu x={menu.x} y={menu.y} hideMenu={hideMenu} />}
    </div>
  );
}

export default MapComponent;
