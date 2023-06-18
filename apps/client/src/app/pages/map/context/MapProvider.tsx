import useMapProvider from '../hooks/useMapProvider';
import MapContext from './MapContext';

function MapProvider({ children }: MapProviderProps) {
  const mapProviderValue = useMapProvider();

  return (
    <MapContext.Provider value={mapProviderValue}>
      {children}
    </MapContext.Provider>
  );
}

export default MapProvider;
