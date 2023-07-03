import { LngLat, Map } from 'mapbox-gl';

const calculateRoute = async (
  start: LngLat,
  end: LngLat,
  type: string
): Promise<DirectionsResponse> => {
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/${type}/${start.lng},${
      start.lat
    };${end.lng},${
      end.lat
    }?alternatives=false&geometries=geojson&access_token=${
      import.meta.env.VITE_PUBLIC_MAPBOX_TOKEN
    }`
  );

  const data = (await response.json()) as DirectionsResponse;

  return data;
};

const drawRoute = (coordinates: number[][], map: Map) => {
  const geojson: GeoJSON.Feature<GeoJSON.Geometry> = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates
    }
  };

  if (map.getSource('route')) {
    (map.getSource('route') as mapboxgl.GeoJSONSource).setData(geojson);
  } else {
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#3887be',
        'line-width': 5,
        'line-opacity': 1
      }
    });
  }
};

export { calculateRoute, drawRoute };
