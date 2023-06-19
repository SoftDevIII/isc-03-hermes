import DropDownTop from '../../../shared-ui-components/TopDrownMenu';

function DropDownMenu({
  isOpen,
  setIsOpen,
  onActionSelected,
  children
}: DropDownMenuProps) {
  return (
    <DropDownTop
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onActionSelected={onActionSelected}
      url='/src/resources/MenuOptions.json'
      className='absolute right-12 top-12'
      menuClassName='top-12 mt-2 right-0'
    >
      {children}
    </DropDownTop>
  );
}

export default DropDownMenu;
