import useMap from '@map-contexts/map/MapState';
import useMarkers from '@map-contexts/markers/MarkersState';

function useMarkerActions() {
  const { setStartMarker, removeStartMarker, setEndMarker, removeEndMarker } =
    useMarkers();
  const { setIsMarking } = useMarkers();
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
