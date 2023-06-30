import { createContext } from 'react';

const CoordinatesContext = createContext<CoordinatesContextValue>({
  startCoordinates: null,
  setStartCoordinates: () => {},
  endCoordinates: null,
  setEndCoordinates: () => {},
  userCoordinates: null,
  setUserCoordinates: () => {}
});

export default CoordinatesContext;
