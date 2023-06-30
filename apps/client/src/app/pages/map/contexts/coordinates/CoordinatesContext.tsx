import { Marker } from 'mapbox-gl';
import { createContext, createRef } from 'react';

const CoordinatesContext = createContext<CoordinatesContextValue>({
  startCoordinates: null,
  setStartCoordinates: () => {},
  startMarker: createRef<Marker>(),
  endCoordinates: null,
  setEndCoordinates: () => {},
  endMarker: createRef<Marker>(),
  userCoordinates: null,
  setUserCoordinates: () => {},
  userMarker: createRef<Marker>(),
  isMarking: false,
  setIsMarking: () => {}
});

export default CoordinatesContext;
