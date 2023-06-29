import Button from '../map/shared-ui-components/Button';
import LabelTextField from '../sign-up/components/LabelTextFile';
import handleDisasterForm from './service/handleDisasterForm';

function DisasterForm() {
  return (
    <div className='bg-[#194569] min-h-screen w-screen flex flex-col justify-center items-center '>
      <div className='text-center w-full'>
        <h1 className='text-center text-white px-16 text-2xl'>Disaster Form</h1>
      </div>
      <div className='w-1/2'>
        <LabelTextField
          type='string'
          classNameTFI='rounded w-full'
          classNameTFD='w-full'
          classNameL='text-white'
          required
          id='disasterName'
        >
          Disaster Name
        </LabelTextField>
        <div className='flex w-full flex-col md:flex-row justify-between'>
          <LabelTextField
            type='time'
            classNameTFI='rounded w-full'
            classNameTFD='w-full'
            classNameL='text-white'
            classNameDiv='w-full md:w-1/2'
            required
            id='duration'
          >
            Duration
          </LabelTextField>
          <LabelTextField
            type='string'
            classNameTFI='rounded w-full'
            classNameTFD='w-full'
            classNameL='text-white'
            classNameDiv='w-full md:w-1/2 md:pl-3'
            required
            id='location'
          >
            Location (In coordinates)
          </LabelTextField>
        </div>
      </div>

      <div className='w-1/2 p-5'>
        <Button
          className='bg-white rounded w-full items-center'
          onClick={() => {
            handleDisasterForm('disasterName', 'duration', 'location');
          }}
        >
          Upload Disaster
        </Button>
      </div>
    </div>
  );
}

export default DisasterForm;
