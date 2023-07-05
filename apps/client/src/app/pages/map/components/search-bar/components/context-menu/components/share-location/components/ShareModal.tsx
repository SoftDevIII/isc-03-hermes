import Status from '@enums/Status';
import Button from '@map-shared-components/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CancelIcon from '@mui/icons-material/Cancel';
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
    <div className='z-20 fixed grid bg-black/30 left-0 right-0 top-0 bottom-0 place-items-center'>
      <div
        className='flex flex-col bg-black/60
        rounded-2xl w-11/12 relative p-4 gap-5 landscape:sm:flex-row landscape:md:flex-col
        portrait:w-3/4 landscape:md:w-1/3 portrait:md:w-2/4'
      >
        <Button
          onClick={() => setIsOpen(false)}
          className='absolute grid right-2 top-2'
        >
          <CancelIcon />
        </Button>
        <p className='block text-2xl text-center mt-5'>{placeName}</p>
        <div className='grid place-items-center'>
          <div className='grid w-11/12'>
            <p className='font-bold text-start'>Link to share</p>
            <div className='flex justify-between gap-2 '>
              <input
                className='flex col-span-5 bg-black/70 py-[6px] px-2 rounded-lg
              text-white outline-none w-full'
                type='text'
                id='link-input'
                name='link-input'
                value={link}
                onChange={() => {}}
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
