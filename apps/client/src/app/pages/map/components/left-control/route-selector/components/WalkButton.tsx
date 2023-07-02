import walkIcon from '@map-assets/walking-icon.png';
import useRouteType from '@map-contexts/route-selector/RouteTypeState';
import SelectorButton from './SelectorButton';

function WalkButton({ className = '', setIsOpen }: WalkButtonProps) {
  const { setRouteType } = useRouteType();
  const onClick = () => {
    setIsOpen(false);
    setRouteType('walk');
  };

  return (
    <SelectorButton
      alt='Walk Icon'
      onClick={() => onClick()}
      icon={walkIcon}
      className={`${className}`}
    />
  );
}

export default WalkButton;
