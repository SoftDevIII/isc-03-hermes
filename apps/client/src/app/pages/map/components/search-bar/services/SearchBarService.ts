import PlacesAPI from '@api/PlacesAPI';
import { INIT_LAT, INIT_LONG, MAX_RESULTS } from '@utils/constants';

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

export default fetchMapBoxPlaces;
