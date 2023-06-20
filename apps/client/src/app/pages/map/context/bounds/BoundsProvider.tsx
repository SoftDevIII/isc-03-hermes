import useBoundsProvider from '../../hooks/useBoundsProvider';
import BoundsContext from './BoundsContext';

function BoundsProvider({ children }: BoundsProviderProps) {
  const boundsProviderValue = useBoundsProvider();

  return (
    <BoundsContext.Provider value={boundsProviderValue}>
      {children}
    </BoundsContext.Provider>
  );
}

export default BoundsProvider;
