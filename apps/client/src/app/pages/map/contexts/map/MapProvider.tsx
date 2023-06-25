import MapContext from './MapContext';
import useMapProvider from './hooks/useMapProvider';

function MapProvider({ children }: MapProviderProps) {
  const mapProviderValue = useMapProvider();

  return (
    <MapContext.Provider value={mapProviderValue}>
      {children}
    </MapContext.Provider>
  );
}

export default MapProvider;
