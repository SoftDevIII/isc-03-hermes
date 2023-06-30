import Status from '@enums/Status';

const copiedSuccessful = ({
  setSnackbarMessage,
  setSnackbarOpen,
  setSnackbarSeverity,
  setIsDisabled
}: GrantPermissionProps) => {
  setSnackbarSeverity(Status.SUCCESS);
  setSnackbarMessage('Link copied successfully');
  setSnackbarOpen(true);
  setIsDisabled(false);
};

export default { copiedSuccessful };
