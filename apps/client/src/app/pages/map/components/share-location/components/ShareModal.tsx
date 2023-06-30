import Button from '@map-shared-components/Button';
import '@map-styles/share-modal.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import Status from '@enums/Status';
import CopyLinkButton from './CopyLinkButton';

function ShareModal({ link, setIsOpen, placeName }: ShareModalProps) {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const handleClick = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setIsSnackbarOpen(true);
        console.log('Link copied successfully');
      })
      .catch((error: Error) => {
        throw new Error(error.message);
      });
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <>
      <div className='darkBG' />
      <div className='centered p-1 h-60 w-60 landscape:sm:w-96 landscape:lg:h-96 landscape:w-80 landscape:h-48 modal bg-black/50 grid grid-cols-5'>
        <div className='col-span-5 w-full'>
          <Button
            onClick={() => setIsOpen(false)}
            className='ml-auto rounded-full text-white sm:w-10 sm:h-10 sm:text-[24px] grid place-items-center'
          >
            <HighlightOffIcon />
          </Button>
        </div>
        <div id='link-container' className='h-80 col-span-5 m-3'>
          <p className='block text-2xl text-center'>{placeName}</p>
          <br />
          <p className='block text-lg font-bold'>Link to share</p>
          <div className='grid grid-cols-6'>
            <input
              className='flex gap-2 col-span-4 bg-black/70 py-[6px] px-3 rounded-lg text-white outline-none landscape:sm:text-[16px]'
              type='text'
              id='link-input'
              name='link-input'
              value={link}
            />
            <CopyLinkButton onClick={handleClick}>
              <ContentCopyIcon />
            </CopyLinkButton>
          </div>
        </div>
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
    </>
  );
}

export default ShareModal;
