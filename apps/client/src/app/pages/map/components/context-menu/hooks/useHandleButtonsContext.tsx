const useHandleButtonsContext = ({ hideMenu }: UseHandleContextProps) => {
  const handleSetStartPoint = () => {
    hideMenu();
  };

  const handleSetEndPoint = () => {
    hideMenu();
  };

  const handleShowInfo = () => {
    hideMenu();
  };

  return { handleSetStartPoint, handleSetEndPoint, handleShowInfo };
};

export default useHandleButtonsContext;
