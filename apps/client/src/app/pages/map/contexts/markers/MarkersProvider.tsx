import useMarkersProvider from './hooks/useMarkersProvider';
import MarkersContext from './MarkersContext';

function MarkersProvider({ children }: MarkersProviderProps) {
  const markerProviderValue = useMarkersProvider();

  return (
    <MarkersContext.Provider value={markerProviderValue}>
      {children}
    </MarkersContext.Provider>
  );
}

export default MarkersProvider;
