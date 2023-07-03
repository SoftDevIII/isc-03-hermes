import useMarkers from '@map-contexts/markers/MarkersState';

const useHandleClick = ({
  coordinates,
  setIsOpen,
  removeMarker,
  feature,
  setIsCommonPlace,
  setIsUncommonPlace
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

  const handleInfoClick = () => {
    if (!feature) return;
    if ('context' in feature) {
      setIsCommonPlace(true);
      return;
    }
    setIsUncommonPlace(true);
  };

  return { handleStartClick, handleEndClick, handleInfoClick };
};

export default useHandleClick;
