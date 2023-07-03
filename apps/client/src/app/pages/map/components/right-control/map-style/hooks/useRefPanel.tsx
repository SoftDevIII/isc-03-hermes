import { LegacyRef, useEffect, useRef } from 'react';

function useRefPanel({ setIsOpen }: UseRefPanelProps) {
  const ref: LegacyRef<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.addEventListener('click', event => {
      if (ref.current?.contains(event.target as Node)) {
        return;
      }
      setIsOpen(false);
    });
  }, [setIsOpen]);

  return ref;
}

export default useRefPanel;
