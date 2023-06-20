import { LngLat, Map as MapBox } from 'mapbox-gl';
import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';

export {};

declare global {
  type MapType = {
    map: MapBox;
    container: HTMLElement | string;
  };

  type MapRef = {
    map: RefObject<MapType['map'] | undefined>;
    container: RefObject<MapType['container'] | undefined>;
  };

  interface MapContextValue {
    map: MapRef['map'];
    container: MapRef['container'];
  }

  interface MapProviderProps {
    children: ReactNode;
  }

  interface CreateMapProps {
    container: MapRef['container'];
  }

  interface ConfigureMapProps {
    current: MapType['map'];
  }

  interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    className?: string;
  }

  interface ZoomButtonProps {
    children: ReactNode;
    onClick: () => void;
  }

  interface BoundsContextValue {
    isOutBounds: boolean;
    setIsOutBounds: Dispatch<SetStateAction<boolean>>;
  }

  interface MarkerButtonProps {
    children: ReactNode;
    onClick: () => void;
  }

  interface MenuButtonProps {
    children: ReactNode;
    onClick: () => void;
  }

  interface OptionButtonProps {
    children: ReactNode;
    onClick: () => void;
  }

  type Option = {
    id: number;
    title: string;
    action: string;
  };

  interface UseOptionsProps {
    json: Option[];
  }

  interface DropDownProps {
    onActionSelected: (action: string) => void;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    menuClassName: string;
    json: Option[];
  }

  interface DropDownTopProps {
    children: ReactNode;
    onActionSelected: (action: string) => void;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    className: string;
    menuClassName: string;
    json: Option[];
  }

  interface DropDownBottomProps {
    children: ReactNode;
    onActionSelected: (action: string) => void;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    className: string;
    menuClassName: string;
    json: Option[];
  }

  interface DropDownMarkerProps {
    children: ReactNode;
    onActionSelected: (action: string) => void;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface DropDownMenuProps {
    children: ReactNode;
    onActionSelected: (action: string) => void;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface CoordinatesContextValue {
    startCoordinates: LngLat;
    setStartCoordinates: Dispatch<SetStateAction<LngLat>>;
    endCoordinates: LngLat;
    setEndCoordinates: Dispatch<SetStateAction<LngLat>>;
  }

  interface BoundsProviderProps {
    children: ReactNode;
  }

  interface CoordinatesProviderProps {
    children: ReactNode;
  }
}
