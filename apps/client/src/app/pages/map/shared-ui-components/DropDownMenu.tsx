import { MutableRefObject } from 'react';
import useRefMenu from '../hooks/useRefMenu';

function DropDownMenu({ className, setIsOpen, children }: DropDownMenuProps) {
  const { ref } = useRefMenu({ setIsOpen });

  return (
    <div
      ref={ref as MutableRefObject<HTMLDivElement>}
      className={`absolute ${className}`}
    >
      {children}
    </div>
  );
}

export default DropDownMenu;
