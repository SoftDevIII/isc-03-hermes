import { useState } from 'react';
import useMap from '@map-contexts/map/MapState';
import ShareButton from './ShareButton';
import ShareModal from './ShareModal';

function ShareLink({ long, lat, placeName }: ShareLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const link = `${window.location.origin}/map?long=${long}&lat=${lat}`;
  const { isLoading } = useMap();

  if (isLoading) {
    return <div />;
  }
  return (
    <>
      {isOpen && (
        <ShareModal link={link} setIsOpen={setIsOpen} placeName={placeName} />
      )}
      <div className='absolute left-6 bottom-40 rounded-full md:left-8 md:bottom-40'>
        <span>
          <ShareButton onClick={() => setIsOpen(true)} />
        </span>
      </div>
    </>
  );
}

export default ShareLink;
