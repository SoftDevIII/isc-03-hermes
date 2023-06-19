import { createContext } from 'react';

const BoundsContext = createContext<BoundsContextValue>({
  isOutBounds: false,
  setIsOutBounds: () => {}
});

export default BoundsContext;
