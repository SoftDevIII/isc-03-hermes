import Menu from './components/Menu';

function ContextMenu({
  setIsOpen,
  coordinates,
  removeMarker,
  feature
}: ContextMenuProps) {
  return (
    <div className='absolute top-20 right-8 landscape:sm:right-20 landscape:md:right-8'>
      <Menu
        coordinates={coordinates}
        setIsOpen={setIsOpen}
        removeMarker={removeMarker}
        feature={feature}
      />
    </div>
  );
}

export default ContextMenu;
