import { MutableRefObject } from 'react';
import useRefMenu from '../../marker/hooks/useRefMenu';

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
