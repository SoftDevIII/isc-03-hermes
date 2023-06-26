import useCoordinatesProvider from './hooks/useCoordinatesProvider';
import CoordinatesContext from './CoordinatesContext';

function CoordinatesProvider({ children }: CoordinatesProviderProps) {
  const coordinatesProviderValue = useCoordinatesProvider();

  return (
    <CoordinatesContext.Provider value={coordinatesProviderValue}>
      {children}
    </CoordinatesContext.Provider>
  );
}

export default CoordinatesProvider;
