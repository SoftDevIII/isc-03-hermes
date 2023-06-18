import { Map as MapBox } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ReactNode, useEffect, useMemo, useRef } from 'react';
import MapContext from './MapContext';
import MapTypes from './MapTypes';

interface Props {
  children: ReactNode;
}

const INIT_LONG = -70.9;
const INIT_LAT = 42.35;
const INIT_ZOOM = 9;

function MapProvider({ children }: Props) {
  const map = useRef<MapTypes['Map']>();
  const mapContainer = useRef<MapTypes['Container']>();

  useEffect(() => {
    map.current = new MapBox({
      accessToken: import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN,
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [INIT_LONG, INIT_LAT],
      zoom: INIT_ZOOM
    });
  }, []);

  const MapProviderValue = useMemo(
    () => ({ map, mapContainer }),
    [map, mapContainer]
  );

  return (
    <MapContext.Provider value={MapProviderValue}>
      {children}
    </MapContext.Provider>
  );
}

export default MapProvider;
