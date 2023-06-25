import { useContext } from 'react';
import MapContext from './MapContext';

function useMap() {
  const context = useContext(MapContext);
  if (!context) throw new Error('useMap must be used within a MapProvider');
  return context;
}

export default useMap;
