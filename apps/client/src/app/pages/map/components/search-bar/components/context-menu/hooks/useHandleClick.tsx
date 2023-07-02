import useMarkers from '@map-contexts/markers/MarkersState';

const useHandleClick = ({
  coordinates,
  setIsOpen,
  removeMarker
}: UseHandleClickProps) => {
  const { createStartMarkerCoordinates, createEndMarkerCoordinates } =
    useMarkers();

  const handleStartClick = () => {
    createStartMarkerCoordinates({ coordinatesToMark: coordinates });
    setIsOpen(false);
    removeMarker();
  };

  const handleEndClick = () => {
    createEndMarkerCoordinates({ coordinatesToMark: coordinates });
    setIsOpen(false);
    removeMarker();
  };

  const handleInfoClick = () => {};

  return { handleStartClick, handleEndClick, handleInfoClick };
};

export default useHandleClick;
