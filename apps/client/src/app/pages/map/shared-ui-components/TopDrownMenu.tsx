import DropDown from './DropDown';

function DropDownTop({
  children,
  url,
  onActionSelected,
  isOpen,
  setIsOpen,
  className,
  menuClassName
}: DropDownTopProps) {
  return (
    <div className={`${className} cursor-pointer`}>
      {children}
      <DropDown
        onActionSelected={onActionSelected}
        isOpen={isOpen}
        menuClassName={menuClassName}
        url={url}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default DropDownTop;
