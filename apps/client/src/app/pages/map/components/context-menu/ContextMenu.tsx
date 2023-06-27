import { LngLat } from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import Button from '../../shared-ui-components/Button';
import useEndMarker from '../marker/hooks/useEndMarker';
import useStartMarker from '../marker/hooks/useStartMarker';

/* eslint-disable react/prop-types */
interface ContextMenuProps {
  x: number;
  y: number;
  lngLat: LngLat;
  hideMenu: () => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  lngLat,
  hideMenu
}) => {
  const { removeStartMarker, setStartMarkerFromCoordinates } = useStartMarker();
  const { setEndMarkerFromCoordinates, removeEndMarker } = useEndMarker();
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
    removeStartMarker();
    setStartMarkerFromCoordinates(lngLat);
    hideMenu();
  };

  const handleSetEndPoint = () => {
    removeEndMarker();
    setEndMarkerFromCoordinates(lngLat);
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
      <p className='mb-3 border-b border-white/20'>
        {' '}
        {lngLat.lng.toFixed(4)}, {lngLat.lat.toFixed(4)}
      </p>
      <Button
        onClick={handleSetStartPoint}
        className='block w-full text-left mb-3 border-b border-white/20 '
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
