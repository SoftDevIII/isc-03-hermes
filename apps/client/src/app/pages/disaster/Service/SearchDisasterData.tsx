import AutoCompleteButton from '../../map/components/search-bar/components/AutoCompleteButton';

function SearchDataDisaster({
  filterData,
  handleLocationClick
}: SearchDisasterDataProps) {
  return (
    <div className=' bg-black/50 rounded-xl p-2'>
      <div
        className='overflow-y-scroll scrollbar-thin scrollbar-thumb scrollbar-track pr-[7px] flex flex-col gap-[6px]
       max-h-[60px]'
      >
        {filterData.map(feature => (
          <AutoCompleteButton
            key={feature.id}
            onClick={() => handleLocationClick(feature)}
          >
            {feature.text}
          </AutoCompleteButton>
        ))}
      </div>
    </div>
  );
}

export default SearchDataDisaster;
