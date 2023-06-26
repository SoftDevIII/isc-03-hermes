function useMenuActions() {
  function goProfile() {}

  function goHome() {}

  function goSettings() {}

  function goHelp() {}

  const actions: MenuActions = {
    goHome,
    goProfile,
    goSettings,
    goHelp
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
