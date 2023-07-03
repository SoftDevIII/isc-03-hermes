import useMap from '@map-contexts/map/MapState';
import { useState } from 'react';
import ShareButton from './components/ShareButton';
import ShareModal from './components/ShareModal';

function ShareLink({ coordinates, placeName }: ShareLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const link = `${window.location.origin}/map?long=${coordinates.lng}&lat=${coordinates.lat}`;

  const { isLoading } = useMap();

  if (isLoading) {
    return <div />;
  }

  return (
    <>
      {isOpen && (
        <ShareModal link={link} setIsOpen={setIsOpen} placeName={placeName} />
      )}
      <div className='absolute left-1 top-1'>
        <ShareButton onClick={() => setIsOpen(true)} />
      </div>
    </>
  );
}

export default ShareLink;
