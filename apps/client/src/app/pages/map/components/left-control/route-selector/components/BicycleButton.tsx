import bicycleIcon from '@map-assets/bicycle-icon.png';
import useRouteType from '@map-contexts/route-selector/RouteTypeState';
import SelectorButton from './SelectorButton';

function BicycleButton({ className = '', setIsOpen }: BicycleButtonProps) {
  const { setRouteType } = useRouteType();
  const onClick = () => {
    setIsOpen(false);
    setRouteType('cycling');
  };

  return (
    <SelectorButton
      alt='Bicycle Icon'
      onClick={() => onClick()}
      icon={bicycleIcon}
      className={`${className}`}
    />
  );
}

export default BicycleButton;
