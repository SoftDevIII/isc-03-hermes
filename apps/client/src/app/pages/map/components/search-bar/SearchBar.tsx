import '@map-styles/scroll-bar.css';
import { LngLat } from 'mapbox-gl';
import { useEffect, useState } from 'react';
import useMap from '../../contexts/map/MapState';
import SearchInput from './components/SearchInput';
import ContextMenu from './components/context-menu/ContextMenu';
import Menu from './components/menu/Menu';
import useSearchMarker from './hooks/useSearchMarker';
import {
  convertCoordinatesToFeat,
  fetchWeatherByCoordinates
} from './services/SearchBarService';

function SearchBar({ long, lat }: UseSearchBarProps) {
  const { isLoading } = useMap();
  const [isOpen, setIsOpen] = useState(false);
  const [coordinates, setCoordinates] = useState<LngLat>(new LngLat(0, 0));
  const [feature, setFeature] = useState<Feature | Coordinates | null>(null);
  const { createMarker, removeMarker } = useSearchMarker({ setCoordinates });

  useEffect(() => {
    if (!long || !lat) {
      return;
    }
    const longParse = Number(long) / 10000;
    const latParse = Number(lat) / 10000;
    const coord = new LngLat(longParse, latParse);
    setCoordinates(coord);
    createMarker([coord.lng, coord.lat]);
    setIsOpen(true);
    const feat = convertCoordinatesToFeat({ coordinates: coord });
    fetchWeatherByCoordinates({ coordinates: coord })
      .then(res => {
        setFeature({
          ...feat,
          temperature: res,
          category: '',
          description: '',
          address: ''
        });
      })
      .catch((error: Error) => {
        throw new Error(error.message);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          feature={feature}
        />
      )}
      <div className='grid absolute w-full py-4 z-10'>
        <div
          className='flex bg-black/50 py-[5px] md:py-3 px-4 w-5/6 md:w-8/12 rounded-2xl
          m-auto gap-4 justify-between landscape:sm:py-[5px] portrait:md:py-[5px]'
        >
          <SearchInput
            createMarker={createMarker}
            setIsOpen={setIsOpen}
            setFeature={setFeature}
          />
          <Menu />
        </div>
      </div>
    </>
  );
}

export default SearchBar;
