function handleDisasterForm(
  disasterName: string,
  duration: string,
  location: string
) {
  const disasterNameRef = document.getElementById(
    disasterName
  ) as HTMLInputElement;
  const durationRef = document.getElementById(duration) as HTMLInputElement;
  const locationRef = document.getElementById(location) as HTMLInputElement;

  const disasterData = {
    disasterNameRef: disasterNameRef.value,
    durationRef: durationRef.value,
    locationRef: locationRef.value
  };
  return disasterData;
}

export default handleDisasterForm;
