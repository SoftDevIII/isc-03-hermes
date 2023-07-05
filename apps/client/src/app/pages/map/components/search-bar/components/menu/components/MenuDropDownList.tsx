import MenuList from './MenuList';
import MenuUser from './MenuUser';

function MenuDropDownList({
  className,
  setIsOpen,
  onActionSelected,
  addRef
}: MenuDropDownListProps) {
  const handleActionSelected = (action: string) => {
    onActionSelected(action);
    setIsOpen(false);
  };

  return (
    <div
      className={`absolute grid right-0 left-0 top-0 bottom-0 h-screen bg-black/50
    lg:bg-black/0  lg:w-56 lg:h-72 lg:left-auto ${className} mt-[-10px]`}
    >
      <div
        className='portrait:w-4/6 landscape:w-5/12 landscape:lg:w-full rounded-2xl shadow-2xl
      bg-[#19181e] flex flex-col m-auto portrait:md:w-3/6'
        ref={ref => addRef({ ref })}
      >
        <MenuUser handleActionSelected={handleActionSelected} />
        <MenuList handleActionSelected={handleActionSelected} />
      </div>
    </div>
  );
}

export default MenuDropDownList;
