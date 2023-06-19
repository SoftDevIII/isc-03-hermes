import DropDown from './DropDown';

function DropDownBottom({
  children,
  url,
  onActionSelected,
  isOpen,
  setIsOpen,
  className,
  menuClassName
}: DropDownBottomProps) {
  return (
    <div className={`${className} cursor-pointer`}>
      <DropDown
        onActionSelected={onActionSelected}
        isOpen={isOpen}
        menuClassName={menuClassName}
        url={url}
        setIsOpen={setIsOpen}
      />
      {children}
    </div>
  );
}

export default DropDownBottom;
