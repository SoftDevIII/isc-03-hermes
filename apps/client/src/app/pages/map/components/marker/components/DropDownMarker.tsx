import markerOptions from '@resources/MarkerOptions.json';
import DropDownBottom from '../../../shared-ui-components/DropDownBottom';

function DropDownMarker({
  isOpen,
  setIsOpen,
  onActionSelected,
  children
}: DropDownMarkerProps) {
  return (
    <DropDownBottom
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onActionSelected={onActionSelected}
      className='absolute left-12 bottom-12'
      menuClassName='bottom-12 mb-2'
      json={markerOptions}
    >
      {children}
    </DropDownBottom>
  );
}

export default DropDownMarker;
