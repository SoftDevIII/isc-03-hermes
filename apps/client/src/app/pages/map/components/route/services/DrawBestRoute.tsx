import mapboxgl, { LngLatBounds } from 'mapbox-gl';

const drawBestRoute = (map: mapboxgl.Map, routeData: { route: any[] }) => {
  const coordinates = routeData.route.map((instruction: any) => {
    const { maneuver } = instruction;
    const { location } = maneuver;
    return location;

  map.addLayer({
    id: 'route',
    type: 'line',
    source: {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: coordinates,
        },
      },
    },
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': '#888',
      'line-width': 6,
    },
  });

  const bounds = coordinates.reduce((bounds: LngLatBounds, coord: number[]) => {
    return bounds.extend(coord);i
  }, new LngLatBounds(coordinates[0], coordinates[0]));
  map.fitBounds(bounds, { padding: 50 });
};
