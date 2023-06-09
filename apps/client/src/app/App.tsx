import { useState } from 'react';

export default function App() {
  const [state, setState] = useState('');

  const onClick = () => {
    fetch('/api/test/1')
      .then(res => res.json())
      .then(data => setState(data.name));
  };
  return (
    <>
      <button onClick={onClick} className='p-2 bg-blue-50'>
        click me
      </button>
      {state}
    </>
  );
}
