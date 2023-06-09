import { useState } from 'react';

interface Data {
  id_test: number;
  name: string;
}

export default function App() {
  const [state, setState] = useState('');

  const onClick = () => {
    fetch('/api/test/1')
      .then(res => res.json())
      .then((data: Data) => setState(data.name))
      .catch((err: Error) => setState(err.message));
  };

  return (
    <>
      <button type='button' onClick={onClick} className='p-2 bg-blue-50'>
        click me
      </button>
      {state}
    </>
  );
}
