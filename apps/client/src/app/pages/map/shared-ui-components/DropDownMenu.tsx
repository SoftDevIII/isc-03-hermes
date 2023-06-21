import { MutableRefObject, useEffect, useRef } from 'react';

function DropDownMenu({ className, setIsOpen, children }: DropDownMenuProps) {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    document.body.addEventListener('click', event => {
      if (ref.current?.contains(event.target as Node)) {
        return;
      }

      setIsOpen(false);
    });
  }, [setIsOpen]);

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
