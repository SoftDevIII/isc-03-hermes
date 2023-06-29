import Button from '@map-shared-components/Button';
import { ReactNode } from 'react';

function Option({ children }: { children: ReactNode }) {
  return (
    <Button
      className='bg-slate-200 grid place-items-center content-center px-8 py-1 rounded-xl shadow-2xl'
      onClick={() => {}}
    >
      {children}
    </Button>
  );
}

export default Option;
