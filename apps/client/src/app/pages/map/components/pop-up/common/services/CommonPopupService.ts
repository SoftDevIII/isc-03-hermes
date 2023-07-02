import PlaceDetailsAPI from '@api/PlaceDetailsAPI';
import { INIT_LAT, INIT_LONG, MAX_RESULTS } from '@utils/constants';

function fetchPlaceDetails({
  query,
  coordinates,
  setFilterData
}: FetchPlaceDetailsProps) {
  const proximity = `${coordinates ? coordinates.lng : INIT_LONG},
  ${coordinates ? coordinates.lat : INIT_LAT}`;

  return PlaceDetailsAPI.get(`/${query}.json`, {
    params: { proximity }
  })
    .then(({ data }: { data: PublicPlacesResponseProps }) => {
      const response = data.features.slice(0, MAX_RESULTS);

      setFilterData(response);
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

export default fetchPlaceDetails;
