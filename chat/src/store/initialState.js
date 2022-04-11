export const initialState = {
  user: {
    loggedIn: false,
    username: null,
    color: null,
    fetching: null,
    userError: null,
  },
  messages: {
    messages: [],
    fetching: null,
  },
};
