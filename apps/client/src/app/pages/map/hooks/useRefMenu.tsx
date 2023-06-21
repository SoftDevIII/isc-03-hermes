import { useEffect, useRef } from 'react';

function useRefMenu({ setIsOpen }: UseRefMenuProps) {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    document.body.addEventListener('click', event => {
      if (ref.current?.contains(event.target as Node)) {
        return;
      }

      setIsOpen(false);
    });
  }, [setIsOpen]);

  return { ref };
}

export default useRefMenu;
