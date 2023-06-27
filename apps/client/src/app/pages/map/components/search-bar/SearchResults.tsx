import { Feature } from './interfaces/places'; // import the type for 'Feature'

interface SearchResultsProps {
  results: Feature[]; // declare that 'results' is an array of 'Feature'
}

function SearchResults({ results }: SearchResultsProps) {
  return (
    <ul className='flex-row w-5/6 md:w-4/6 bg-white rounded-2xl overflow-hidden '>
      {results.map(result => (
        <li key={result.id} className='border-b p-4'>
          <h6 className='font-bold'> {result.text_es} </h6>
          <p className='text-sm text-gray-500'> {result.place_name}</p>
          <button
            type='button'
            className='mt-2 inline-block bg-blue-500 text-white rounded px-4 py-2'
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
