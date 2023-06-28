import { LegacyRef, useEffect, useRef } from 'react';

function useSearchRef({ setIsOpen }: UseSearchRefProps) {
  const searchRef: LegacyRef<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.addEventListener('click', event => {
      if (searchRef.current?.contains(event.target as Node)) {
        return;
      }
      setIsOpen(false);
    });
  }, [setIsOpen]);

  return { searchRef };
}

export default useSearchRef;
