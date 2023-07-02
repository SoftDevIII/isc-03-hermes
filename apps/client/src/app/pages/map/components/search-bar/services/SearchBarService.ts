import PlacesAPI from '@api/PlacesAPI';
import { INIT_LAT, INIT_LONG, MAX_RESULTS } from '@utils/constants';
import { LngLat } from 'mapbox-gl';

function convertCoordinatesToFeat({
  coordinates
}: ConvertCoordinatesToFeatProps) {
  return {
    id: coordinates.toString(),
    place_name_es: `Coordinates: ${coordinates.lng.toString()}, ${coordinates.lat.toString()}`,
    geometry: {
      type: 'coordinates',
      coordinates: [coordinates.lng, coordinates.lat]
    },
    text: `Coordinates: ${coordinates.lng.toString()}, ${coordinates.lat.toString()}`
  };
}

function fetchMapBoxPlaces({
  query,
  coordinates,
  setFilterData
}: FetchMapBoxPlacesProps) {
  PlacesAPI.get<PlacesResponse>(`/${query}.json`, {
    params: {
      proximity: `${coordinates ? coordinates.lng : INIT_LONG},${
        coordinates ? coordinates.lat : INIT_LAT
      }`
    }
  })
    .then(({ data }: { data: PlacesResponse }) => {
      const response = data.features.slice(0, MAX_RESULTS);

      setFilterData(response);
    })
    .catch((error: Error) => {
      throw new Error(error.message);
    });
}

function coordinatesRegex({ coordinates }: CoordinatesRegexProps) {
  const regex =
    /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)\s*,\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/g;
  return regex.test(coordinates);
}

function convertRegexToCoordinates({
  coordinates
}: ConvertRegexToCoordinatesProps) {
  const regex = coordinatesRegex({ coordinates });
  if (!regex) {
    return null;
  }
  const [lng, lat] = coordinates.replace(/\s+/g, '').split(',');
  return new LngLat(parseFloat(lng), parseFloat(lat));
}

export {
  convertCoordinatesToFeat,
  convertRegexToCoordinates,
  fetchMapBoxPlaces
};
