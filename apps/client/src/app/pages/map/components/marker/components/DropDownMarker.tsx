import DropDownBottom from '../../../shared-ui-components/BottomDrownMenu';

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
      url='/src/resources/MarkerOptions.json'
      className='absolute left-12 bottom-12'
      menuClassName='bottom-12 mb-2'
    >
      {children}
    </DropDownBottom>
  );
}

export default DropDownMarker;
