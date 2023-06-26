import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import useMap from '@map-contexts/map/MapState';
import useEndMarker from './useEndMarker';
import useStartMarker from './useStartMarker';

function useMarkerActions() {
  const { setEndMarker, removeEndMarker } = useEndMarker();
  const { setStartMarker, removeStartMarker } = useStartMarker();
  const { setIsMarking } = useCoordinates();
  const { map } = useMap();

  const stopMarking = () => {
    if (!map.current) return;
    map.current.getCanvas().style.cursor = '';
    setIsMarking(false);
  };

  const actions: MarkerMenuActions = {
    setStartMarker,
    removeStartMarker,
    setEndMarker,
    removeEndMarker,
    stopMarking
  };

  const handleActionSelected = (action: string) => {
    const selectedAction = actions[action];
    if (selectedAction) {
      selectedAction();
    }
  };

  return { handleActionSelected };
}

export default useMarkerActions;
