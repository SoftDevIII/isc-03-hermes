import { LngLat } from 'mapbox-gl';

type CoordinatesDisplayProps = {
  coordinates: LngLat;
};

function CoordinatesDisplay({ coordinates }: CoordinatesDisplayProps) {
  return (
    <div className='absolute bottom-2/4 text-center left-10 z-10 bg-black/80 p-4 rounded cursor-default w-[175px] '>
      <h2>Coordinates: </h2>
      <div>
        {coordinates.lng.toFixed(3)}, {coordinates.lat.toFixed(4)}
      </div>
    </div>
  );
}

export default CoordinatesDisplay;
