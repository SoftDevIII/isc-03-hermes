function useMenuActions() {
  function goHome() {
    window.location.href = '/home';
  }

  function goDisaster() {
    window.location.href = '/disaster';
  }

  function goLogIn() {
    window.location.href = '/login';
  }

  function goSignUp() {
    window.location.href = '/sign-up';
  }

  const actions: MenuActions = {
    goHome,
    goLogIn,
    goSignUp,
    goDisaster
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
