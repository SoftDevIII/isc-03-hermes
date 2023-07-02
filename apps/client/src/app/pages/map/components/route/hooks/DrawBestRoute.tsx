import { AnySourceData, LngLatBounds, Map, Marker } from 'mapbox-gl';
import { useReducer } from 'react';
import directionsApi from './directionsApi';
import { DirectionsResponse } from './interfaces';
import { mapReducer } from './mapReducer';

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
  markers: []
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function MapProvider({ children }: Props) {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

  const getRouteBetweenPoints = async (
    start: [number, number],
    end: [number, number]
  ) => {
    const resp = await directionsApi.get<DirectionsResponse>(
      `/${start.join(',')};${end.join(',')}`
    );
    const { distance, duration, geometry } = resp.data.routes[0];
    const { coordinates: coords } = geometry;

    const bounds = new LngLatBounds(start, start);

    coords.forEach(coord => {
      const newCoord: [number, number] = [coord[0], coord[1]];
      bounds.extend(newCoord);
    });

    state.map?.fitBounds(bounds, {
      padding: 200
    });

    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords
            }
          }
        ]
      }
    };

    if (state.map?.getLayer('RouteString')) {
      state.map?.removeLayer('RouteString');
      state.map.removeSource('RouteString');
    }

    state.map?.addSource('RouteString', sourceData);
    state.map?.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-color': 'white',
        'line-width': 3
      }
    });
  };
}
