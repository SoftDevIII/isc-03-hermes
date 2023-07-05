import { createContext, createRef } from 'react';

const MapContext = createContext<MapContextValue>({
  map: createRef<MapType['map']>(),
  container: createRef<MapType['container']>(),
  actualZoom: 50,
  isLoading: true
});

export default MapContext;
