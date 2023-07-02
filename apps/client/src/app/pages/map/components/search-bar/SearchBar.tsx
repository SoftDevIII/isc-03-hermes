import '@map-styles/scroll-bar.css';
import { LngLat } from 'mapbox-gl';
import { useState } from 'react';
import useMap from '../../contexts/map/MapState';
import SearchInput from './components/SearchInput';
import ContextMenu from './components/context-menu/ContextMenu';
import Menu from './components/menu/Menu';
import useSearchMarker from './hooks/useSearchMarker';

function SearchBar() {
  const { isLoading } = useMap();
  const [isOpen, setIsOpen] = useState(false);
  const [coordinates, setCoordinates] = useState<LngLat>(new LngLat(0, 0));
  const { createMarker, removeMarker } = useSearchMarker({ setCoordinates });

  if (isLoading) {
    return <div />;
  }

  return (
    <>
      {isOpen && (
        <ContextMenu
          setIsOpen={setIsOpen}
          coordinates={coordinates}
          removeMarker={removeMarker}
        />
      )}
      <div className='grid absolute w-full py-4 z-10'>
        <div
          className='flex bg-black/50 py-[5px] md:py-3 px-4 w-5/6 md:w-8/12 rounded-2xl
          m-auto gap-4 justify-between landscape:sm:py-[5px] portrait:md:py-[5px]'
        >
          <SearchInput createMarker={createMarker} setIsOpen={setIsOpen} />
          <Menu />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
