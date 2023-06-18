import { Map } from 'mapbox-gl';

const INIT_LONG = -70.9;
const INIT_LAT = 42.35;
const INIT_ZOOM = 9;

function createMap({ container }: CreateMapProps) {
  return new Map({
    accessToken: import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN,
    container: container.current as HTMLElement,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [INIT_LONG, INIT_LAT],
    zoom: INIT_ZOOM
  });
}

export default createMap;
