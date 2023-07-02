import { LngLat } from 'mapbox-gl';
import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMarkers from '@map-contexts/markers/MarkersState';

const useHandleButtonsContext = ({ hideMenu }: UseHandleContextProps) => {
  const {
    createStartMarkerCoordinates,
    removeStartMarker,
    createEndMarkerCoordinates,
    removeEndMarker
  } = useMarkers();
  const { startCoordinates, endCoordinates } = useCoordinates();

  const handleSetStartPoint = ({ coordinates }: { coordinates: LngLat }) => {
    if (startCoordinates) {
      removeStartMarker();
    }
    createStartMarkerCoordinates({ coordinatesToMark: coordinates });
    hideMenu();
  };

  const handleSetEndPoint = ({ coordinates }: { coordinates: LngLat }) => {
    if (endCoordinates) {
      removeEndMarker();
    }
    createEndMarkerCoordinates({ coordinatesToMark: coordinates });
    hideMenu();
  };

  const handleShowInfo = ({ coordinates }: { coordinates: LngLat }) => {
    // TODO: Show info
    hideMenu();
    throw new Error(coordinates.toString());
  };

  return { handleSetStartPoint, handleSetEndPoint, handleShowInfo };
};

export default useHandleButtonsContext;
