import CloseButtonContext from './CloseButtonContext';
import ContextButton from './ContextButton';

function Menu({ coordinates, setIsOpen, removeMarker }: MenuProps) {
  return (
    <div className='bg-black/50 text-white p-5  rounded-2xl text-center'>
      <CloseButtonContext setIsOpen={setIsOpen} removeMarker={removeMarker} />
      <p className='mb-3 border-b border-white/20'>
        {' '}
        {coordinates.lng.toFixed(4)}, {coordinates.lat.toFixed(4)}
      </p>
      <ContextButton handleClick={() => () => {}}>
        Set as starting point
      </ContextButton>
      <ContextButton handleClick={() => () => {}}>
        Set as destiny point
      </ContextButton>
      <ContextButton handleClick={() => () => {}} last>
        Marker Information
      </ContextButton>
    </div>
  );
}

export default Menu;
