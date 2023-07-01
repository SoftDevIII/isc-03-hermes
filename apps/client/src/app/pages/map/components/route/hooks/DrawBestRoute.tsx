import { useContext, useEffect, useReducer } from "react";
import { AnySourceData, LngLatBounds, Map, Marker, Popup } from 'mapbox-gl';
import { directionsApi } from "../../apis";
import { DirectionsResponse } from "../../interfaces/direction";

const getRouteBetweenPoints = async(start: [number, number], end: [number, number]) => {
  const resp = await directionsApi.get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`);
  const { distance, duration, geometry } = resp.data.routes[0];
  const {coordinates: coords} = geometry;

  let kms = distance / 1000;
      kms = Math.round(kms * 100);
      kms /= 100;
  
  const minutes = Math.floor (duration / 60);
  console.log({ kms, minutes });

  const bounds = new LngLatBounds(start, start);

  for (const coord of coords) {
      const newCoord: [number, number] = [coord[0], coord[1]];
      bounds.extend( newCoord );
  }

  state.map?.fitBounds ( bounds, {
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
  }
  
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
          'line-width': 3,
      }
   })
};
