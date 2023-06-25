import { MutableRefObject } from 'react';
import useRefMenu from '../../../hooks/useRefMenu';

function MarkerDropDownMenu({
  className = '',
  setIsOpen,
  children
}: MarkerDropDownMenuProps) {
  const ref = useRefMenu({ setIsOpen });

  return (
    <div
      ref={ref as MutableRefObject<HTMLDivElement>}
      className={`${className}`}
    >
      {children}
    </div>
  );
}

export default MarkerDropDownMenu;
