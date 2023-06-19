import DropDown from './DropDown';

function DropDownTop({
  children,
  onActionSelected,
  isOpen,
  setIsOpen,
  className,
  menuClassName,
  json
}: DropDownTopProps) {
  return (
    <div className={`${className} cursor-pointer`}>
      {children}
      <DropDown
        onActionSelected={onActionSelected}
        isOpen={isOpen}
        menuClassName={menuClassName}
        setIsOpen={setIsOpen}
        json={json}
      />
    </div>
  );
}

export default DropDownTop;
