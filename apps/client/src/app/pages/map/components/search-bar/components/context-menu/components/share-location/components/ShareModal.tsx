import Status from '@enums/Status';
import Button from '@map-shared-components/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';
import CopyLinkButton from './CopyLinkButton';
import SocialLocationSharing from './SocialLocationSharing';

function ShareModal({ link, setIsOpen, placeName }: ShareModalProps) {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const handleClick = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setIsSnackbarOpen(true);
      })
      .catch((error: Error) => {
        throw new Error(error.message);
      });
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <div className='z-20 fixed grid bg-black/30 left-0 right-0 top-0 bottom-0'>
      <div
        className='flex flex-col bg-black/60 p-4
        rounded-2xl w-1/3 m-auto text-white gap-6 relative'
      >
        <Button
          onClick={() => setIsOpen(false)}
          className='absolute grid right-2'
        >
          <HighlightOffIcon />
        </Button>
        <p className='block text-2xl text-center mt-4'>{placeName}</p>
        <div className='grid place-items-center'>
          <div className='grid w-11/12'>
            <p className='text-lg font-bold text-start'>Link to share</p>
            <div className='grid grid-cols-6'>
              <input
                className='flex col-span-5 bg-black/70 py-[6px] px-3 rounded-lg
              text-white outline-none landscape:sm:text-[16px]'
                type='text'
                id='link-input'
                name='link-input'
                value={link}
              />
              <CopyLinkButton onClick={handleClick}>
                <ContentCopyIcon fontSize='inherit' />
              </CopyLinkButton>
            </div>
          </div>
        </div>
        <SocialLocationSharing />
      </div>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={1500}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={Status.SUCCESS}
          style={{ backgroundColor: '#14171b', color: 'white', opacity: 0.9 }}
        >
          Link copied successfully
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ShareModal;
