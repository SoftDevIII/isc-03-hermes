function ZoomLevel({ actualZoom }: ZoomLevelProps) {
  return (
    <div className='rounded-full right-52'>
      <div className='flex rounded-2xl items-center'>
        <h1 className='text-lg text-white font-roboto'>{actualZoom}%</h1>
      </div>
    </div>
  );
}

export default ZoomLevel;
