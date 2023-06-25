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
    actualZoom: number;
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
    disabled?: boolean;
    addRef?: ({
      ref
    }: {
      ref: HTMLDivElement | HTMLButtonElement | null;
    }) => void;
  }

  interface ZoomButtonProps {
    children: ReactNode;
    onClick: () => void;
    disabled: boolean;
  }

  interface ActualLocationButtonProps {
    children: ReactNode;
    onClick: () => void;
    disabled: boolean;
  }

  interface MarkerButtonProps {
    children: ReactNode;
    onClick: () => void;
  }

  interface MenuButtonProps {
    children: ReactNode;
    onClick: () => void;
    addRef: ({
      ref
    }: {
      ref: HTMLDivElement | HTMLButtonElement | null;
    }) => void;
  }

  interface OptionButtonProps {
    children: ReactNode;
    title: string;
    onClick: () => void;
    last?: boolean;
  }

  interface CoordinatesContextValue {
    startCoordinates: LngLat;
    setStartCoordinates: Dispatch<SetStateAction<LngLat>>;
    endCoordinates: LngLat;
    setEndCoordinates: Dispatch<SetStateAction<LngLat>>;
    userCoordinates: LngLat;
    setUserCoordinates: Dispatch<SetStateAction<LngLat>>;
    isMarking: boolean;
    setIsMarking: Dispatch<SetStateAction<boolean>>;
  }

  interface CoordinatesProviderProps {
    children: ReactNode;
  }

  interface UseMarkerProps {
    type: string;
    icon: string;
    setCoordinates: Dispatch<SetStateAction<LngLat>>;
    isUserMarker?: boolean;
  }

  interface DropDownMenuProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    className?: string;
    children: ReactNode;
  }

  interface DropDownListProps {
    className: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    onActionSelected: (action: string) => void;
    addRef: ({
      ref
    }: {
      ref: HTMLDivElement | HTMLButtonElement | null;
    }) => void;
  }

  interface UseRefMenuProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface MarkerMenuActions {
    [key: string]: () => void;
  }

  interface MarkerMenuListProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isOpen: boolean;
    onActionSelected: (action: string) => void;
  }

  interface ExitButtonProps {
    onClick: () => void;
    className: string;
  }

  interface OptionCancelButtonProps {
    children: ReactNode;
    handleClick: () => void;
    isMarked: boolean;
  }

  interface OptionMarkerButtonProps {
    title: string;
    icon: string;
    isMarked: boolean;
    handleClick: () => void;
    ajustImage?: string;
  }

  interface EndMarkerButtonProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    onActionSelected: (action: string) => void;
  }

  interface StartMarkerButtonProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    onActionSelected: (action: string) => void;
  }

  interface ConfigureZoomPercentage {
    current: MapType['map'];
    setActualZoom: Dispatch<SetStateAction<number>>;
  }

  interface ProfileButtonProps {
    onClick: () => void;
  }

  interface UseMultiRefsProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface ZoomLevelProps {
    actualZoom: number;
  }
}
