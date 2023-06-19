import menuOptions from '@resources/MenuOptions.json';
import DropDownTop from '../../../shared-ui-components/DropDownTop';

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
      className='absolute right-12 top-12'
      menuClassName='top-12 mt-2 right-0'
      json={menuOptions}
    >
      {children}
    </DropDownTop>
  );
}

export default DropDownMenu;
