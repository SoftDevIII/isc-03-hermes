import { useEffect, useRef } from 'react';

function useMultiRefs({ setIsOpen }: UseMultiRefsProps) {
  const refs = useRef<(HTMLDivElement | HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    document.body.addEventListener('click', event => {
      if (refs.current?.some(ref => ref?.contains(event.target as Node))) {
        return;
      }
      setIsOpen(false);
    });
  }, [setIsOpen]);

  function addRef({ ref }: { ref: HTMLDivElement | HTMLButtonElement | null }) {
    if (!ref) {
      return;
    }

    refs.current?.push(ref);
  }

  return [addRef];
}

export default useMultiRefs;
