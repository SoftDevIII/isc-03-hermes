import useBounds from '../../../context/bounds/BoundsState';

function AlertPopUp() {
  const { setIsOutBounds } = useBounds();
  setTimeout(() => {
    setIsOutBounds(false);
  }, 2000);

  return (
    <div className='absolute grid left-0 right-0 bottom-12 place-items-center'>
      <h1 className='bg-black/60 p-3 rounded  text-xl'>Out of bounds.</h1>
    </div>
  );
}

export default AlertPopUp;
