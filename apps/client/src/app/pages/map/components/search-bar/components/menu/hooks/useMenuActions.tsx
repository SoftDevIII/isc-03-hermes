function useMenuActions() {
  function goProfile() {}

  function goHome() {}

  function goSettings() {}

  function goHelp() {}

  function goLightMode() {}

  function goLogout() {}

  const actions: MenuActions = {
    goHome,
    goProfile,
    goSettings,
    goHelp,
    goLightMode,
    goLogout
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
