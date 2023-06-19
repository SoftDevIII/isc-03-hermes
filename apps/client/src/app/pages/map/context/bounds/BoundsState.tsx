import { useContext } from 'react';
import BoundsContext from './BoundsContext';

function useBounds() {
  const context = useContext(BoundsContext);
  if (!context)
    throw new Error('useBounds must be used within a BoundsProvider');
  return context;
}

export default useBounds;
