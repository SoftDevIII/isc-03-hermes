enum StatusMessage {
  USER_GRANTED_PERMISSION = 'Location Permission Granted',
  USER_REVOKED_PERMISSION = 'Location Permission Denied',
  SUCCESS = 'Location retrieved successfully',
  GEO_PERMISSION_DENIED = 'Geolocation permission denied',
  LOCATION_TIMEOUT = 'Location retrieval timed out',
  SOMETHING_WENT_WRONG = 'Something Went Wrong'
}

export default StatusMessage;
