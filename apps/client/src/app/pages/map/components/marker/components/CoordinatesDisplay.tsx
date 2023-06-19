import { LngLat } from 'mapbox-gl';

type CoordinatesDisplayProps = {
  coordinates: LngLat;
};

function CoordinatesDisplay({ coordinates }: CoordinatesDisplayProps) {
  return (
    <div className='absolute top-12 left-12 text-center bg-black/50 p-4 rounded-3xl cursor-default text-white'>
      <h2>Coordinates:</h2>
      <p>
        {coordinates.lng.toFixed(6)},{coordinates.lat.toFixed(6)}
      </p>
    </div>
  );
}

export default CoordinatesDisplay;
