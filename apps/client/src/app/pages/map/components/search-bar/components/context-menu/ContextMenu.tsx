import { useState } from 'react';
import Menu from './components/Menu';

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
      {commonPlace && <div>common</div>}
      {uncommonPlace && <div>uncommon</div>}
    </div>
  );
}

export default ContextMenu;
