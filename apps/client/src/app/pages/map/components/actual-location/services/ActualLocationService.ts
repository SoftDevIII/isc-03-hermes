import StatusMessage from '../enums/LocationStatus';
import Status from '../enums/Status';

const grantPermission = ({
  setSnackbarMessage,
  setSnackbarOpen,
  setSnackbarSeverity,
  setIsDisabled
}: GrantPermissionProps) => {
  setSnackbarSeverity(Status.SUCCESS);
  setSnackbarMessage(StatusMessage.USER_GRANTED_PERMISSION);
  setSnackbarOpen(true);
  setIsDisabled(false);
};

const revokePermission = ({
  setSnackbarMessage,
  setSnackbarOpen,
  setSnackbarSeverity
}: RevokePermissionsProps) => {
  setSnackbarSeverity(Status.WARNING);
  setSnackbarMessage(StatusMessage.USER_REVOKED_PERMISSION);
  setSnackbarOpen(true);
};

const successCurrentPosition = ({
  coordinates,
  createUserMarker,
  redirectToUserLocation,
  setSnackbarMessage,
  setSnackbarSeverity,
  setSnackbarOpen
}: SuccessCurrentPositionProps) => {
  createUserMarker({ coordinates });
  redirectToUserLocation({ coordinates });
  setSnackbarMessage(StatusMessage.SUCCESS);
  setSnackbarSeverity(Status.SUCCESS);
  setSnackbarOpen(true);
};

const errorCurrentPosition = ({
  setSnackbarSeverity
}: ErrorCurrentPositionProps) => {
  setSnackbarSeverity(Status.ERROR);
};

const somethingWentWrongError = ({
  setSnackbarMessage,
  setSnackbarSeverity
}: SomethingWentWrongErrorProps) => {
  setSnackbarMessage(StatusMessage.SOMETHING_WENT_WRONG);
  errorCurrentPosition({ setSnackbarSeverity });
};

const locationTimeoutError = ({
  setSnackbarMessage,
  setSnackbarSeverity
}: LocationTimeoutErrorProps) => {
  setSnackbarMessage(StatusMessage.LOCATION_TIMEOUT);
  errorCurrentPosition({ setSnackbarSeverity });
};

const geoPermissionDeniedError = ({
  setSnackbarMessage,
  setSnackbarSeverity
}: GeoPermissionDeniedErrorProps) => {
  setSnackbarMessage(StatusMessage.GEO_PERMISSION_DENIED);
  errorCurrentPosition({ setSnackbarSeverity });
};

export {
  geoPermissionDeniedError,
  grantPermission,
  locationTimeoutError,
  revokePermission,
  somethingWentWrongError,
  successCurrentPosition
};
