import useCoordinates from '@map-contexts/coordinates/CoordinatesState';
import { LngLat } from 'mapbox-gl';
import { ChangeEvent, RefObject, useRef, useState } from 'react';
import {
  convertCoordinatesToFeat,
  convertRegexToCoordinates,
  fetchMapBoxPlaces,
  fetchWeatherByCoordinates,
  getPlaceDetailsByName
} from '../services/SearchBarService';

function useSearchInput({
  setFilterData,
  setIsOpen,
  isOpen,
  createMarker,
  setIsContextOpen,
  setFeature
}: UseSearchInputProps) {
  const { userCoordinates } = useCoordinates();

  const [search, setSearch] = useState<string>('');
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);

    if (value === '') {
      setFilterData([]);
      return;
    }

    if (!isOpen) setIsOpen(true);

    const coordinatesSearch = convertRegexToCoordinates({
      coordinates: value
    });

    if (coordinatesSearch) {
      const newFeat = convertCoordinatesToFeat({
        coordinates: coordinatesSearch
      });

      setFilterData([
        {
          ...newFeat,
          temperature: 0,
          category: '',
          description: '',
          address: ''
        }
      ]);

      return;
    }

    fetchMapBoxPlaces({
      query: value,
      coordinates: userCoordinates,
      setFilterData
    });
  };

  const clearInput = () => {
    setSearch('');
    setFilterData([]);
    ref.current?.focus();
  };

  const handleSearch = ({ feature }: HandleSearchProps) => {
    const coordinates = new LngLat(
      feature.geometry.coordinates[0],
      feature.geometry.coordinates[1]
    );
    fetchWeatherByCoordinates({ coordinates })
      .then(res => {
        const details = getPlaceDetailsByName({ name: feature.place_name_es });
        if (details) {
          setFeature({
            ...feature,
            temperature: res,
            category: details.category,
            description: details.description,
            address: details.address
          });
        } else {
          setFeature({
            ...feature,
            temperature: res,
            category: '',
            description: '',
            address: ''
          });
        }
      })
      .catch((error: Error) => {
        throw new Error(error.message);
      });
    setSearch('');
    setFilterData([]);
    createMarker(feature.geometry.coordinates);
    setIsContextOpen(true);
    setIsOpen(false);
  };

  return { search, onInputChange, ref, clearInput, handleSearch };
}

export default useSearchInput;
