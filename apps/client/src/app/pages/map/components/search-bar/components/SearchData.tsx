import AutoCompleteButton from './AutoCompleteButton';

function SearchData({ filterData, handleSearch }: SearchDataProps) {
  return (
    <div
      className='absolute bg-black/50 rounded-xl py-[17px] pl-[17px] pr-[4px]
    items-center w-3/5 m-auto top-16 left-0 right-0 landscape:sm:w-2/5 portrait:md:w-5/12'
    >
      <div
        className='overflow-y-scroll scrollbar-thin scrollbar-thumb scrollbar-track pr-[7px] flex flex-col gap-[6px]
      h-full max-h-[160px] landscape:sm:max-h-[100px]'
      >
        {filterData.map(feature => (
          <AutoCompleteButton
            key={feature.id}
            onClick={() =>
              handleSearch({ coordinates: feature.geometry.coordinates })
            }
          >
            {feature.place_name_es}
          </AutoCompleteButton>
        ))}
      </div>
    </div>
  );
}

export default SearchData;
