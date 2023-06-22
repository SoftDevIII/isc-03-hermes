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

  interface ActualLocationButtonProps {
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

  interface Options {
    options: Option[];
  }

  interface UseOptionsProps {
    json: Options;
  }

  interface CoordinatesContextValue {
    startCoordinates: LngLat;
    setStartCoordinates: Dispatch<SetStateAction<LngLat>>;
    endCoordinates: LngLat;
    setEndCoordinates: Dispatch<SetStateAction<LngLat>>;
    isMarking: boolean;
    setIsMarking: Dispatch<SetStateAction<boolean>>;
  }

  interface BoundsProviderProps {
    children: ReactNode;
  }

  interface CoordinatesProviderProps {
    children: ReactNode;
  }

  interface UseMarkerProps {
    setCoordinates: Dispatch<SetStateAction<LngLat>>;
    type: string;
    icon: string;
  }

  interface DropDownMenuProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    className: string;
    children: ReactNode;
  }

  interface DropDownListProps {
    options: Option[];
    className: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    onActionSelected: (action: string) => void;
  }

  interface UseRefMenuProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface MarkerMenuActions {
    [key: string]: () => void;
  }
}
