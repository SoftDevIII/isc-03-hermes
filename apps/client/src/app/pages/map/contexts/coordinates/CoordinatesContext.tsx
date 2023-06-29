import { createContext } from 'react';

const CoordinatesContext = createContext<CoordinatesContextValue>({
  startCoordinates: null,
  setStartCoordinates: () => {},
  endCoordinates: null,
  setEndCoordinates: () => {},
  userCoordinates: new LngLat(0, 0),
  setUserCoordinates: () => {},
  isMarking: false,
  setIsMarking: () => {}
});

export default CoordinatesContext;
