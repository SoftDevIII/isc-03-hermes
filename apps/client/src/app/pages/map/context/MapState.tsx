import { useContext } from 'react';
import MapContext from './MapContext';

function useMap() {
  const context = useContext(MapContext);
  if (!context)
    throw new Error('useGlobalState must be used within a GlobalState');
  return context;
}

export default useMap;
