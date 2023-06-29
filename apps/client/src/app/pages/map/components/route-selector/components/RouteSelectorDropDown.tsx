import useRefMenu from '@map-hooks/useRefMenu';
import { MutableRefObject } from 'react';

function RouteSelectorDropDown({
  setIsOpen,
  className = '',
  children
}: RouteSelectorDropDownProps) {
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

export default RouteSelectorDropDown;
