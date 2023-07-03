import useHandleClick from '../hooks/useHandleClick';
import CloseButtonContext from './CloseButtonContext';
import ContextButton from './ContextButton';
import ShareLink from './share-location/ShareLink';

function Menu({
  coordinates,
  setIsOpen,
  removeMarker,
  feature,
  setIsCommonPlace,
  setIsUncommonPlace
}: MenuProps) {
  const { handleStartClick, handleEndClick, handleInfoClick } = useHandleClick({
    coordinates,
    setIsOpen,
    removeMarker,
    feature,
    setIsCommonPlace,
    setIsUncommonPlace
  });

  return (
    <div className='bg-black/50 text-white p-6  rounded-2xl text-center'>
      <CloseButtonContext setIsOpen={setIsOpen} removeMarker={removeMarker} />
      <p className='mb-3 border-b border-white/20'>
        {' '}
        {coordinates.lng.toFixed(4)}, {coordinates.lat.toFixed(4)}
      </p>
      <ContextButton handleClick={() => handleStartClick()}>
        Set as starting point
      </ContextButton>
      <ContextButton handleClick={() => handleEndClick()}>
        Set as destiny point
      </ContextButton>
      <ContextButton handleClick={() => handleInfoClick()} last>
        Marker Information
      </ContextButton>
      <ShareLink coordinates={coordinates} placeName={feature?.text || ''} />
    </div>
  );
}

export default Menu;
