interface StartingPointMarkerProps {
  onClick: () => void;
}

function StartingPointMarker({ onClick }: StartingPointMarkerProps) {
  return (
    <div className='absolute bg-black/80 bottom-10 left-10 z-10 p-4 rounded cursor-default w-[175px]'>
      <button className='' onClick={onClick} type='button'>
        Delete Starting Point
      </button>
    </div>
  );
}

export default StartingPointMarker;
