import GoBackButton from '@shared-components/GoBackButton';
import InputDisaster from '@shared-components/InputDisaster';
import InputLocation from '@shared-components/InputLocation';
import InputTime from '@shared-components/InputTime';
import SubmitButton from '@shared-components/SubmitButton';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchDataDisaster from './Service/SearchDisasterData';
import useSearchDisasterInput from './hooks/useSearchDisasterInput';

function DisasterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDisasterData>({
    disasterName: '',
    latitude: 0,
    longitude: 0,
    hours: 0,
    mins: 0
  });

  const [filterData, setFilterData] = useState<(Feature | Coordinates)[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { search, onInputChange, setSearch, clearInput } =
    useSearchDisasterInput({
      setFilterData,
      setIsOpen,
      isOpen
    });

  const handleClickLocation = (feature: Feature | Coordinates) => {
    const longitude = feature.geometry.coordinates[0];
    const latitude = feature.geometry.coordinates[1];

    setFormData(prevFormData => ({
      ...prevFormData,
      latitude,
      longitude
    }));
    setSearch(feature.text);
    clearInput();
  };

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function convertToTime(number: number) {
    if (number.toLocaleString().length === 1) {
      return `0${number}`;
    }
    return number;
  }

  async function saveDisaster() {
    await axios.post<void>('/api/Disaster', {
      disaster_name: formData.disasterName,
      duration: `${convertToTime(formData.hours)}:${convertToTime(
        formData.mins
      )}`,
      latitude: formData.latitude,
      longitude: formData.longitude
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    saveDisaster()
      .then(() => navigate('/map'))
      .catch((error: Error) => {
        throw new Error(error.message);
      });
  }

  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-700 h-screen grid place-items-center content-center w-screen'>
      <form
        className='flex gap-3 flex-col justify-center items-center p-5 bg-gradient-to-r from-slate-700/80 to-slate-900/20 rounded-2xl shadow-2xl landscape:md-auto landscape:flex-row landscape:md:flex-col'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col gap-1'>
          <p className='text-white px-16 text-2xl font-bold text-center'>
            Disaster Form
          </p>
          <InputDisaster
            name='disasterName'
            value={formData.disasterName}
            onChange={event => onChange(event)}
          >
            Disaster Name:
          </InputDisaster>
          <InputTime onChange={event => onChange(event)} data={formData}>
            Duration:
          </InputTime>
        </div>
        <div className='flex flex-col w-full gap-1'>
          <InputLocation
            name='location'
            onChange={onInputChange}
            value={search}
            onFocus={() => setIsOpen(true)}
          >
            Location:
          </InputLocation>
          <div className='w-full grid place-content-center'>
            <div className='portrait:w-[230px] w-[275px] portrait:md-[275px]'>
              {isOpen && filterData.length !== 0 && (
                <SearchDataDisaster
                  filterData={filterData}
                  handleLocationClick={handleClickLocation}
                />
              )}
            </div>
          </div>
          <div className='flex justify-between w-full'>
            <GoBackButton />
            <SubmitButton />
          </div>
        </div>
      </form>
    </div>
  );
}

export default DisasterPage;
