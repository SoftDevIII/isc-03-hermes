import ShareLink from '../share-location/ShareLink';
import CloseButtonPlace from './CloseButtonPlace';

function CommonPlace({
  removeMarker,
  setIsCommonPlace,
  setIsOpen,
  feature,
  coordinates
}: CommonPlaceProps) {
  return (
    <div className='bg-black/50 text-white p-6  rounded-xl w-96'>
      <CloseButtonPlace
        setIsOpen={setIsOpen}
        removeMarker={removeMarker}
        setIsPlace={setIsCommonPlace}
      />
      <div className='flex justify-between'>
        <p className='font-bold'>{feature?.text}</p>
        <p>Temp: {feature?.temperature.toFixed(0)}ºC</p>
      </div>
      <p className=''>Category: {feature?.category}</p>
      <p className=''>Description: {feature?.description}</p>
      <p className=''>Address: {feature?.address}</p>
      <ShareLink coordinates={coordinates} placeName={feature?.text || ''} />
    </div>
  );
}

export default CommonPlace;
