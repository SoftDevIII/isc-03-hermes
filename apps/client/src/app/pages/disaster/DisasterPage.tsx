import InputDisaster from '@shared-components/InputDisaster';
import InputLocation from '@shared-components/InputLocation';
import SubmitButton from '@shared-components/SubmitButton';
import { useState } from 'react';
import SearchDataDisaster from './Service/SearchDisasterData';
import useSearchDisasterInput from './hooks/useSearchDisasterInput';

function SignUpPage() {
  const [formData, setFormData] = useState<FormDisasterData>({
    disasterName: '',
    duration: '',
    latitude: 0,
    longitude: 0
  });

  const handleClickLocation = (coordinates: number[]) => {
    const latitude = coordinates[1];
    const longitude = coordinates[0];

    setFormData(prevFormData => ({
      ...prevFormData,
      latitude,
      longitude
    }));
    return coordinates;
  };

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  const [filterData, setFilterData] = useState<(Feature | Coordinates)[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { search, onInputChange, ref } = useSearchDisasterInput({
    setFilterData,
    setIsOpen,
    isOpen,
    createMarker: () => {},
    setIsContextOpen: () => {},
    setFeature: () => {}
  });

  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-700 h-screen grid place-items-center content-center'>
      <form
        className='flex gap-3 flex-col justify-center items-center p-5 bg-gradient-to-r from-slate-700/80 to-slate-900/20 rounded-2xl shadow-2xl md:w-auto landscape:md-auto landscape:flex-row landscape:md:flex-col'
        onSubmit={handleSubmit}
      >
        <p className='text-white px-16 text-2xl font-bold'>Disaster Form</p>
        <div className='flex flex-col gap-1'>
          <InputDisaster
            name='disasterName'
            value={formData.disasterName}
            onChange={event => onChange(event)}
          >
            Disaster Name:
          </InputDisaster>
          <InputDisaster
            name='duration'
            value={formData.duration}
            onChange={event => onChange(event)}
            isTime
          >
            Duration:
          </InputDisaster>
          <InputLocation
            name='location'
            onChange={onInputChange}
            value={search}
            ref={ref}
            onFocus={() => setIsOpen(true)}
          >
            Location:
          </InputLocation>
          {isOpen && filterData.length !== 0 && (
            <SearchDataDisaster
              filterData={filterData}
              handleLocationClick={handleClickLocation}
            />
          )}
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
