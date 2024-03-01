export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => {
  return state.auth.user;
};

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectError = (state) => state.auth.error;
