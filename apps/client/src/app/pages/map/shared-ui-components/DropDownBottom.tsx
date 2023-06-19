import DropDown from './DropDown';

function DropDownBottom({
  children,
  onActionSelected,
  isOpen,
  setIsOpen,
  className,
  menuClassName,
  json
}: DropDownBottomProps) {
  return (
    <div className={`${className} cursor-pointer`}>
      <DropDown
        onActionSelected={onActionSelected}
        isOpen={isOpen}
        menuClassName={menuClassName}
        setIsOpen={setIsOpen}
        json={json}
      />
      {children}
    </div>
  );
}

export default DropDownBottom;
