import useBounds from '../../../context/bounds/BoundsState';

function AlertPopUp() {
  const { setIsOutBounds } = useBounds();

  setTimeout(() => {
    setIsOutBounds(false);
  }, 2000);

  return (
    <div className='absolute grid left-0 right-0 bottom-12 place-items-center'>
      <h1 className='bg-black/50 p-4 rounded-3xl  text-xl text-white'>
        Out Of Bounds.
      </h1>
    </div>
  );
}

export default AlertPopUp;
