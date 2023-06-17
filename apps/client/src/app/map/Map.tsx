import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { LegacyRef, useEffect, useRef } from 'react';
import { MapProps } from './MapProps';

export default function Map() {
  const mapContainer = useRef<MapProps['Container']>();
  const map = useRef<MapProps['Map']>();

  const LONG = -66.15566250307504;
  const LAT = -17.393650765970328;
  const ZOOM = 12.5;
  const MIN_ZOOM = 2;
  const MAX_ZOOM = 19.5;

  useEffect(() => {
    if (map.current) {
      return;
    }

    map.current = new mapboxgl.Map({
      accessToken: import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN,
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [LONG, LAT],
      zoom: ZOOM
    });

    map.current.setMinZoom(MIN_ZOOM);
    map.current.setMaxZoom(MAX_ZOOM);
  });

  return (
    <div
      ref={mapContainer as LegacyRef<HTMLDivElement>}
      className='h-full w-full'
    />
  );
}
