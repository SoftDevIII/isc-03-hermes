import { Map as MapBox } from 'mapbox-gl';
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
}
