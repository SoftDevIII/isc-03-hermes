import { createContext } from 'react';

const MarkersContext = createContext<MarkersContextValue>({
  setStartMarker: () => {},
  removeStartMarker: () => {},
  createStartMarkerCoordinates: () => {},
  updateStartMarkerCoordinates: () => {},
  setEndMarker: () => {},
  removeEndMarker: () => {},
  createEndMarkerCoordinates: () => {},
  updateEndMarkerCoordinates: () => {},
  setUserMarker: () => {},
  removeUserMarker: () => {},
  createUserMarkerCoordinates: () => {},
  updateUserMarkerCoordinates: () => {},
  isMarking: false,
  setIsMarking: () => {}
});

export default MarkersContext;
