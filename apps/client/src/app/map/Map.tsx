import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { LegacyRef, useEffect, useRef } from 'react';
import { MapProps } from './MapProps';

export default function Map() {
  const mapContainer = useRef<MapProps['Container']>();
  const map = useRef<MapProps['Map']>();

  const LONG = -70.9;
  const LAT = 42.35;
  const ZOOM = 9;

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
  });

  return (
    <div
      ref={mapContainer as LegacyRef<HTMLDivElement>}
      className='h-full w-full'
    />
  );
}
