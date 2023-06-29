import Button from '../map/shared-ui-components/Button';
import LabelTextField from '../map/shared-ui-components/LabelTextField';
import handleDisasterForm from './service/handleDisasterForm';

function DisasterForm() {
  return (
    <div className=''>
      <div className=''>
        <h1 className=''>Disaster Form</h1>
      </div>
      <div className=''>
        <LabelTextField
          type='string'
          classNameTFI=''
          classNameTFD=''
          classNameL=''
          required
          id='disasterName'
        >
          Disaster Name
        </LabelTextField>
        <LabelTextField
          type='time'
          classNameTFI=''
          classNameTFD=''
          classNameL=''
          classNameDiv=''
          required
          id='duration'
        >
          Duration
        </LabelTextField>
        <LabelTextField
          type='string'
          classNameTFI=''
          classNameTFD=''
          classNameL=''
          classNameDiv=''
          required
          id='location'
        >
          Location (In coordinates)
        </LabelTextField>
      </div>

      <div className=''>
        <Button
          className=''
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
