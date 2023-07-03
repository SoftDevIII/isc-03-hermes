import { useState } from 'react';
import Menu from './components/Menu';
import CommonPlace from './components/place/CommonPlace';
import UncommonPlace from './components/place/UncommonPlace';

function ContextMenu({
  setIsOpen,
  coordinates,
  removeMarker,
  feature
}: ContextMenuProps) {
  const [commonPlace, setIsCommonPlace] = useState(false);
  const [uncommonPlace, setIsUncommonPlace] = useState(false);

  return (
    <div className='absolute top-20 right-8 landscape:sm:right-20 landscape:md:right-8'>
      {!commonPlace && !uncommonPlace && (
        <Menu
          coordinates={coordinates}
          setIsOpen={setIsOpen}
          removeMarker={removeMarker}
          feature={feature}
          setIsCommonPlace={setIsCommonPlace}
          setIsUncommonPlace={setIsUncommonPlace}
        />
      )}
      {commonPlace && (
        <CommonPlace
          removeMarker={removeMarker}
          setIsCommonPlace={setIsCommonPlace}
          setIsOpen={setIsOpen}
          feature={feature}
          coordinates={coordinates}
        />
      )}
      {uncommonPlace && (
        <UncommonPlace
          removeMarker={removeMarker}
          setIsUncommonPlace={setIsUncommonPlace}
          setIsOpen={setIsOpen}
          feature={feature}
          coordinates={coordinates}
        />
      )}
    </div>
  );
}

export default ContextMenu;
