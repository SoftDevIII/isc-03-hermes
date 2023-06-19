import useBoundsProvider from '../../hooks/useBoundsProvider';
import BoundsContext from './BoundsContext';

function BoundsProvider({ children }: MapProviderProps) {
  const boundsProviderValue = useBoundsProvider();

  return (
    <BoundsContext.Provider value={boundsProviderValue}>
      {children}
    </BoundsContext.Provider>
  );
}

export default BoundsProvider;
