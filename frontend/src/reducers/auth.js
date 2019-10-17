const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default (state=initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};