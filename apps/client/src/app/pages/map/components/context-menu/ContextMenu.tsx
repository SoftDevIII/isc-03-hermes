import { useEffect, useRef } from 'react';
import Button from '../../shared-ui-components/Button';
import useEndMarker from '../marker/hooks/useEndMarker';
import useStartMarker from '../marker/hooks/useStartMarker';

interface ContextMenuProps {
  x: number;
  y: number;
  hideMenu: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, hideMenu }) => {
  const { setStartMarker } = useStartMarker();
  const { setEndMarker } = useEndMarker();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        hideMenu();
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [hideMenu]);

  const handleSetStartPoint = () => {
    setStartMarker();
    hideMenu();
  };

  const handleSetEndPoint = () => {
    setEndMarker();
    hideMenu();
  };

  const handleShowInfo = () => {
    hideMenu();
  };

  return (
    <div
      ref={ref}
      className='bg-black/50 text-white p-3  rounded-2xl absolute '
      style={{ top: y, left: x }}
    >
      <p className='mb-3 border-b border-white/20'> Coordinates</p>
      <Button
        onClick={handleSetStartPoint}
        className='block w-full text-left mb-3 border-b border-white/20'
      >
        Set as starting point
      </Button>
      <Button
        onClick={handleSetEndPoint}
        className='block w-full text-left mb-3 border-b border-white/20'
      >
        Set as destiny point
      </Button>
      <Button onClick={handleShowInfo} className='block w-full text-left'>
        Information about
      </Button>
    </div>
  );
};

export default ContextMenu;
