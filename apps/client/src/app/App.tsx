import { useState } from 'react';

export default function App() {
  const [state, setState] = useState('');

  const onClick = () => {
    fetch('/api')
      .then(res => res.text())
      .then(setState);
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
