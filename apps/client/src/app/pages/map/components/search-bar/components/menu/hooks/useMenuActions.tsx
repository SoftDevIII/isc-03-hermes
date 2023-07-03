function useMenuActions() {
  function goProfile() {}

  function goHome() {
    window.location.href = '/home';
  }

  function goSettings() {}

  function goHelp() {}

  function goLightMode() {}

  function goLogout() {}

  function goLogIn() {
    window.location.href = '/login';
  }

  function goSignUp() {
    window.location.href = '/sign-up';
  }

  const actions: MenuActions = {
    goHome,
    goProfile,
    goSettings,
    goHelp,
    goLightMode,
    goLogout,
    goLogIn,
    goSignUp
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
