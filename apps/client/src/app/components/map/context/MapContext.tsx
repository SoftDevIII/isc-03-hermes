import { createContext, createRef, MutableRefObject } from 'react';
import MapTypes from './MapTypes';

interface MapContextValue {
  map: MutableRefObject<MapTypes['Map'] | undefined>;
  mapContainer: MutableRefObject<MapTypes['Container'] | undefined>;
}

const MapContext = createContext<MapContextValue>({
  map: createRef<MapTypes['Map']>() as MutableRefObject<
    MapTypes['Map'] | undefined
  >,
  mapContainer: createRef<MapTypes['Container']>() as MutableRefObject<
    MapTypes['Container'] | undefined
  >
});

export default MapContext;
