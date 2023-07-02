import Menu from './components/Menu';

function ContextMenu({
  setIsOpen,
  coordinates,
  removeMarker
}: ContextMenuProps) {
  return (
    <div className='absolute top-20 right-8'>
      {/* {isOpen && ( */}
      <Menu
        coordinates={coordinates}
        setIsOpen={setIsOpen}
        removeMarker={removeMarker}
      />
      {/* )} */}
    </div>
  );
}

export default ContextMenu;
