import { useContext } from 'react';
import MarkersContext from './MarkersContext';

function useMarkers() {
  const context = useContext(MarkersContext);
  if (!context)
    throw new Error('useMarkers must be used within a MarkersProvider');
  return context;
}

export default useMarkers;
