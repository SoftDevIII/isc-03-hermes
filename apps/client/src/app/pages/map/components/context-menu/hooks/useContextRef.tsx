import { LegacyRef, useEffect, useRef } from 'react';

function useContextRef({ hideMenu }: UseContextRefProps) {
  const contextRef: LegacyRef<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.addEventListener('click', event => {
      if (contextRef.current?.contains(event.target as Node)) {
        return;
      }

      hideMenu();
    });
  }, [hideMenu]);

  return { contextRef };
}

export default useContextRef;
