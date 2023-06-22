import { createContext } from 'react';

const CoordinatesContext = createContext<CoordinatesContextValue>({
  startCoordinates: null,
  setStartCoordinates: () => {},
  endCoordinates: null,
  setEndCoordinates: () => {},
  isMarking: false,
  setIsMarking: () => {}
});

export default CoordinatesContext;
