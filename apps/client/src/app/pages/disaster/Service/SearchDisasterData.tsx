import AutoCompleteButton from '../../map/components/search-bar/components/AutoCompleteButton';

function SearchDataDisaster({
  filterData,
  handleLocationClick
}: SearchDisasterDataProps) {
  return (
    <div
      className=' bg-black/50 rounded-xl py-[17px] pl-[17px] pr-[4px]
    items-center w-full m-auto top-16 left-0 right-0 '
    >
      <div
        className='overflow-y-scroll scrollbar-thin scrollbar-thumb scrollbar-track pr-[7px] flex flex-col gap-[6px]
      h-full max-h-[160px] landscape:sm:max-h-[100px]'
      >
        {filterData.map(feature => (
          <AutoCompleteButton
            key={feature.id}
            onClick={() => handleLocationClick(feature.geometry.coordinates)}
          >
            {feature.place_name_es}
          </AutoCompleteButton>
        ))}
      </div>
    </div>
  );
}

export default SearchDataDisaster;
