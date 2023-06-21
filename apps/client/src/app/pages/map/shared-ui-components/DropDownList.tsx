import OptionButton from './OptionButton';

function DropDownList({
  options,
  className,
  setIsOpen,
  onActionSelected
}: DropDownListProps) {
  const handleActionSelected = (action: string) => {
    onActionSelected(action);
    setIsOpen(false);
  };

  return (
    <li
      className={`absolute w-56 rounded-3xl bg-black/30 flex flex-col gap-2 p-4 ${className}`}
    >
      {options.map(option => {
        return (
          <OptionButton
            key={option.id}
            onClick={() => handleActionSelected(option.action || '')}
          >
            {option.title}
          </OptionButton>
        );
      })}
    </li>
  );
}

export default DropDownList;
