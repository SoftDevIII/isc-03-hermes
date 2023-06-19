import useOptions from '../hooks/useOptions';
import OptionButton from './OptionButton';

function DropDown({
  onActionSelected,
  isOpen,
  setIsOpen,
  menuClassName,
  json
}: DropDownProps) {
  const options = useOptions({ json });

  function handleActionSelected(action: string) {
    onActionSelected(action);
    setIsOpen(false);
  }

  if (isOpen) {
    return (
      <div
        className={`absolute ${menuClassName}
      w-56 rounded-3xl bg-black/30 flex flex-col gap-2 p-4`}
      >
        {options.map(option => {
          return (
            <OptionButton
              key={option.id}
              onClick={() =>
                handleActionSelected(option.action ? option.action : '')
              }
            >
              {option.title}
            </OptionButton>
          );
        })}
      </div>
    );
  }
}

export default DropDown;
