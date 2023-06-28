import Language from '@enums/Language';
import ShortCode from '@enums/ShortCode';
import Wikidata from '@enums/Wikidata';
import { LngLat, Map as MapBox } from 'mapbox-gl';
import {
  Dispatch,
  ReactElement,
  ReactNode,
  RefObject,
  SetStateAction
} from 'react';

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
    isLoading: boolean;
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

  interface ConfigureMapLoading {
    current: MapType['map'];
    setIsLoading: Dispatch<SetStateAction<boolean>>;
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

  interface MenuOptionButtonProps {
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
  }

  interface MarkerDropDownMenuProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    className?: string;
    children: ReactNode;
  }

  interface MenuDropDownListProps {
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

  interface MenuActions {
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

  interface DropDownButtonProps {
    onClick: () => void;
  }

  interface UseMultiRefsProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface ZoomLevelProps {
    actualZoom: number;
  }

  interface AddRefProps {
    ref: HTMLDivElement | HTMLButtonElement | null;
  }

  interface MenuListProps {
    handleActionSelected: (action: string) => void;
  }

  interface MenuUserProps {
    handleActionSelected: (action: string) => void;
  }

  interface ImageProps {
    src: string;
    className?: string;
  }

  interface OptionImageProps {
    src: string;
  }

  interface ReturnLocationProps {
    setSnackbarMessage: Dispatch<SetStateAction<string>>;
    setSnackbarSeverity: Dispatch<SetStateAction<string>>;
    setSnackbarOpen: Dispatch<SetStateAction<boolean>>;
    setIsDisabled: Dispatch<SetStateAction<boolean>>;
  }

  interface GrantPermissionProps {
    setSnackbarMessage: Dispatch<SetStateAction<string>>;
    setSnackbarSeverity: Dispatch<SetStateAction<string>>;
    setSnackbarOpen: Dispatch<SetStateAction<boolean>>;
    setIsDisabled: Dispatch<SetStateAction<boolean>>;
  }

  interface RevokePermissionsProps {
    setSnackbarMessage: Dispatch<SetStateAction<string>>;
    setSnackbarSeverity: Dispatch<SetStateAction<string>>;
    setSnackbarOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface SuccessCurrentPositionProps {
    coordinates: LngLat;
    createUserMarker: ({ coordinates }: CreateUserMarkerProps) => void;
    redirectToUserLocation: ({
      coordinates
    }: RedirectToUserLocationProps) => void;
    setSnackbarMessage: Dispatch<SetStateAction<string>>;
    setSnackbarSeverity: Dispatch<SetStateAction<string>>;
    setSnackbarOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface RedirectToUserLocationProps {
    coordinates: LngLat;
  }

  interface ErrorCurrentPositionProps {
    setSnackbarSeverity: Dispatch<SetStateAction<string>>;
  }

  interface SomethingWentWrongErrorProps {
    setSnackbarMessage: Dispatch<SetStateAction<string>>;
    setSnackbarSeverity: Dispatch<SetStateAction<string>>;
  }

  interface LocationTimeoutErrorProps {
    setSnackbarMessage: Dispatch<SetStateAction<string>>;
    setSnackbarSeverity: Dispatch<SetStateAction<string>>;
  }

  interface GeoPermissionDeniedErrorProps {
    setSnackbarMessage: Dispatch<SetStateAction<string>>;
    setSnackbarSeverity: Dispatch<SetStateAction<string>>;
  }

  interface FetchUserLocationProps {
    setSnackbarMessage: Dispatch<SetStateAction<string>>;
    setSnackbarSeverity: Dispatch<SetStateAction<string>>;
    setSnackbarOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface UseUserMarkerProps {
    setIsMarked: Dispatch<SetStateAction<boolean>>;
  }

  interface CreateMarkerProps {
    coordinates: LngLat;
  }

  interface CreateUserMarkerProps {
    coordinates: LngLat;
  }

  interface UseLocationProps {
    createUserMarker: ({ coordinates }: CreateMarkerProps) => void;
    updateCoordinates: ({ coordinates }: UpdateCoordinatesProps) => void;
    removeUserMarker: () => void;
  }

  interface UpdateCoordinatesProps {
    coordinates: LngLat;
  }

  interface HandleErrorsProps {
    error: GeolocationPositionError;
    setSnackbarMessage: Dispatch<SetStateAction<string>>;
    setSnackbarSeverity: Dispatch<SetStateAction<string>>;
    setSnackbarOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface WatchPositionProps {
    setSnackbarMessage: Dispatch<SetStateAction<string>>;
    setSnackbarSeverity: Dispatch<SetStateAction<string>>;
    setSnackbarOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface SearchButtonProps {
    onClick: () => void;
    className: string;
  }

  interface CloseButtonProps {
    onClick: () => void;
    className: string;
  }

  interface UseSearchInputProps {
    setFilterData: Dispatch<SetStateAction<(Feature | Coordinates)[]>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isOpen: boolean;
  }

  interface SearchDataProps {
    filterData: (Feature | Coordinates)[];
  }

  interface UseSearchRefProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface AutoCompleteButtonProps {
    children: ReactNode;
    onClick: () => void;
  }

  interface PlacesResponse {
    type: string;
    query: string[];
    features: Feature[];
    attribution: string;
  }

  interface Feature {
    id: string;
    type: string;
    place_type: string[];
    relevance: number;
    properties: Properties;
    text_es: string;
    place_name_es: string;
    text: string;
    place_name: string;
    bbox?: number[];
    center: number[];
    geometry: Geometry;
    context: Context[];
  }

  interface Coordinates {
    id: string;
    place_name_es: string;
    geometry: Geometry;
  }

  interface Context {
    id: string;
    wikidata?: Wikidata;
    short_code?: ShortCode;
    text_es: string;
    language_es?: Language;
    text: string;
    language?: Language;
  }

  interface Geometry {
    type: string;
    coordinates: number[];
  }

  interface Properties {
    foursquare?: string;
    landmark?: boolean;
    category?: string;
    maki?: string;
    address?: string;
  }

  interface FetchMapBoxPlacesProps {
    query: string;
    coordinates: LngLat;
    setFilterData: Dispatch<SetStateAction<(Feature | Coordinates)[]>>;
  }

  interface FetchMapBoxPlacesResponse {
    response: PlacesResponse;
  }

  interface CoordinatesRegexProps {
    coordinates: string;
  }

  interface ConvertRegexToCoordinatesProps {
    coordinates: string;
  }

  interface ConvertCoordinatesToFeatProps {
    coordinates: LngLat;
  }

  interface TextFieldProps {
    classNameDiv?: string;
    classNameInput?: string;
    type: string;
    required?: boolean;
    placeholder?: string;
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
    icon?: ReactElement;
    ref?: RefObject<HTMLInputElement>;
    id?: string;
  }

  interface TextBoxProps {
    id?: string;
    ref?: RefObject<HTMLInputElement>;
  }

  interface HeaderProps {
    isLoggedIn?: boolean;
    username?: string;
  }

  interface IsLoggedInViewProps {
    username?: string;
  }

  interface ReferenceButtonProps {
    ref?: string;
    content: string;
  interface LabelTextFieldProps {
    classNameTFI?: string;
    classNameTFD?: string;
    classNameDiv?: string;
    type: string;
    required?: boolean;
    placeholder?: string;
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
    classNameL?: string;
    children: ReactNode;
    id: string;
  }

  interface SocialButtonProps {
    icon: string;
    onClick: () => void;
  }
  interface SocialMediaButtonProps {
    src: string;
    alt: string;
    urlConnection: string;
  }

  interface SupportButtonProps {
    title: string;
    isLast?: boolean;
  interface SignUpImputProps {
    classNameDiv?: string;
    children: ReactNode;
    id: string;
    type: string;
  }
}
