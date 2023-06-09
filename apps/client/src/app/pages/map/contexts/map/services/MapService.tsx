import {
  INIT_LAT,
  INIT_LONG,
  INIT_ZOOM,
  MAX_ZOOM,
  MIN_ZOOM,
  PERCENTAGE
} from '@utils/constants';
import axios from 'axios';
import { LngLat, Map, Marker } from 'mapbox-gl';

function createMap({ container }: CreateMapProps) {
  return new Map({
    accessToken: import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN,
    container: container.current as HTMLElement,
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    center: [INIT_LONG, INIT_LAT],
    zoom: INIT_ZOOM,
    pitchWithRotate: false
  });
}

function configureMap({ current }: ConfigureMapProps) {
  current.setMinZoom(MIN_ZOOM);
  current.setMaxZoom(MAX_ZOOM);
}

const configureZoomPercentage = ({
  current,
  setActualZoom
}: ConfigureZoomPercentage) => {
  current.on('zoom', () => {
    const zoom = current.getZoom();
    const percentage = Math.round(
      ((zoom - MIN_ZOOM) / (MAX_ZOOM - MIN_ZOOM)) * PERCENTAGE
    );
    setActualZoom(percentage);
  });
};

const configureMapLoading = ({
  current,
  setIsLoading
}: ConfigureMapLoading) => {
  current.on('load', () => {
    setIsLoading(false);
  });
};

const delDisasters = async () => {
  await axios.delete('/api/Disaster');
};

const fetchDisasters = async () => {
  await delDisasters();
  const response = await axios.get('/api/Disaster');
  const data = response.data as Disaster[];
  return data;
};

const graphDisaster = ({ current, disaster }: GraphDisasterProps) => {
  const coordinates = new LngLat(disaster.longitude, disaster.latitude);
  const marker = new Marker().setLngLat(coordinates);
  marker.getElement().innerHTML = `<div class='disaster-marker'></div>`;
  marker.addTo(current);
};

const addDisasters = ({ current }: AddDisastersProps) => {
  fetchDisasters()
    .then(data =>
      data.forEach(disaster => graphDisaster({ current, disaster }))
    )
    .catch((error: Error) => {
      throw new Error(error.message);
    });
};

export {
  addDisasters,
  configureMap,
  configureMapLoading,
  configureZoomPercentage,
  createMap
};
