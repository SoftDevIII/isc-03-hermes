import { createContext, createRef } from 'react';

const MapContext = createContext<MapContextValue>({
  map: createRef<MapType['map']>(),
  container: createRef<MapType['container']>()
});

export default MapContext;
