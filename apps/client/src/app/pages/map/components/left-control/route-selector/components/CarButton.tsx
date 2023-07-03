import carIcon from '@map-assets/car-icon.png';
import useRouteType from '@map-contexts/route-selector/RouteTypeState';
import SelectorButton from './SelectorButton';

function CarButton({ className = '', setIsOpen }: CarButtonProps) {
  const { setRouteType } = useRouteType();
  const onClick = () => {
    setIsOpen(false);
    setRouteType('driving');
  };

  return (
    <SelectorButton
      alt='Car Icon'
      onClick={() => onClick()}
      icon={carIcon}
      className={`${className}`}
    />
  );
}

export default CarButton;
