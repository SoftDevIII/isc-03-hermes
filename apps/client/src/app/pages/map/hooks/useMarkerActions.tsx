import useEndMarker from './useEndMarker';
import useStartMarker from './useStartMarker';

function useMarkerActions() {
  const { setEndMarker, removeEndMarker } = useEndMarker();
  const { setStartMarker, removeStartMarker } = useStartMarker();

  const actions: MarkerMenuActions = {
    setStartMarker,
    removeStartMarker,
    setEndMarker,
    removeEndMarker
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
