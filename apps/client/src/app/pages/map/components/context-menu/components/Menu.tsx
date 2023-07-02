import useContextRef from '../hooks/useContextRef';
import useHandleButtonsContext from '../hooks/useHandleButtonsContext';
import ContextButton from './ContextButton';

function Menu({ x, y, lngLat, hideMenu, left, top }: ContextMenuProps) {
  const { contextRef } = useContextRef({ hideMenu });

  const { handleSetStartPoint, handleSetEndPoint, handleShowInfo } =
    useHandleButtonsContext({ hideMenu });

  return (
    <div
      ref={contextRef}
      className={`bg-black/50 text-white p-3  rounded-2xl absolute  ${
        top ? 'mt-[-165px]' : ''
      } ${left ? 'ml-[-165px]' : ''}`}
      style={{ top: y, left: x }}
    >
      <p className='mb-3 border-b border-white/20'>
        {' '}
        {lngLat.lng.toFixed(4)}, {lngLat.lat.toFixed(4)}
      </p>
      <ContextButton
        handleClick={() => handleSetStartPoint({ coordinates: lngLat })}
      >
        Set as starting point
      </ContextButton>
      <ContextButton
        handleClick={() => handleSetEndPoint({ coordinates: lngLat })}
      >
        Set as destiny point
      </ContextButton>
      <ContextButton
        handleClick={() => handleShowInfo({ coordinates: lngLat })}
        last
      >
        Marker Information
      </ContextButton>
    </div>
  );
}

export default Menu;
