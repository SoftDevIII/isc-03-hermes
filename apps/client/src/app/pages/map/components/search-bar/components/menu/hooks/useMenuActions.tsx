function useMenuActions() {
  function goProfile() {}

  function goHome() {}

  function goSettings() {}

  function goHelp() {}

  function goLightMode() {}

  function goLogout() {}

  function showFavorites() {}

  const actions: MenuActions = {
    goHome,
    goProfile,
    goSettings,
    goHelp,
    goLightMode,
    goLogout,
    showFavorites
  };

  const handleActionSelected = (action: string) => {
    const selectedAction = actions[action];
    if (selectedAction) {
      selectedAction();
    }
  };

  return { handleActionSelected };
}

export default useMenuActions;
