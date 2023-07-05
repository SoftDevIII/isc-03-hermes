import ShareLink from '../share-location/ShareLink';
import CloseButtonPlace from './CloseButtonPlace';

function UncommonPlace({
  removeMarker,
  setIsUncommonPlace,
  setIsOpen,
  feature,
  coordinates
}: UncommonPlaceProps) {
  return (
    <div className='bg-black/50 text-white p-6  rounded-xl text-xs w-60 md:text-base md:w-auto landscape:md:w-80'>
      <CloseButtonPlace
        setIsOpen={setIsOpen}
        removeMarker={removeMarker}
        setIsPlace={setIsUncommonPlace}
      />
      <div className='flex flex-col justify-center items-center'>
        <p>Temp: {feature?.temperature.toFixed(0)}ºC</p>
        <p className='font-bold'>{feature?.text}</p>
      </div>
      <ShareLink coordinates={coordinates} placeName={feature?.text || ''} />
    </div>
  );
}

export default UncommonPlace;
