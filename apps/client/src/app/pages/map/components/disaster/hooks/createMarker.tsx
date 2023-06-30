import { LngLat, Marker } from 'mapbox-gl';
import { useRef } from 'react';
import useMap from '../../../contexts/map/MapState';

function useDisaster() {
  const { map } = useMap();
  const marker = useRef<Marker>(new Marker());

  const disasters = [
    {
      id: 1,
      latitude: -17.783286,
      longitude: 63.182968
    },
    {
      id: 1,
      latitude: -17.778128,
      longitude: -63.182578
    },
    {
      id: 1,
      latitude: -17.775311,
      longitude: -63.178222
    }
  ];

  const createMarker = (lngLat: LngLat) => {
    if (!map.current) {
      return;
    }
    marker.current = new Marker().setLngLat(lngLat);
    marker.current.addTo(map.current);
  };

  disasters.forEach(disaster => {
    const coordinates = new LngLat(disaster.longitude, disaster.latitude);

    createMarker(coordinates);
  });
}

export default useDisaster;
