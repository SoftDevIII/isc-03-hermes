import { useState } from 'react';
import Menu from './components/Menu';
import useHandleContext from './hooks/useHandleContext';

function ContextMenu() {
  const [menu, setMenu] = useState<ContextMenu | null>(null);

  const { handleContextMenu, hideMenu } = useHandleContext({ setMenu });

  return (
    <div
      className='z-20 absolute h-full w-full '
      onContextMenu={handleContextMenu}
    >
      {menu && (
        <Menu
          x={menu.x}
          y={menu.y}
          lngLat={menu.lngLat}
          hideMenu={hideMenu}
          top={menu.up}
          left={menu.left}
        />
      )}
    </div>
  );
}

export default ContextMenu;
