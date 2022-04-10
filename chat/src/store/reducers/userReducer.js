import { initialState } from "../initialState";
import {
  LOGOUT_CALL_FAILURE,
  LOGOUT_CALL_FETCH,
  LOGOUT_CALL_SUCCESS,
  USER_CALL_FAILURE,
  USER_CALL_FETCH,
  USER_CALL_SUCCESS,
} from "../actions/userActionTypes";

export const user = (state = initialState.user, action) => {
  switch (action.type) {
    case USER_CALL_FETCH:
      return { ...state, fetching: true, userError: null };
    case USER_CALL_SUCCESS:
      const { username } = action.user;
      return {
        ...state,
        fetching: false,
        username: username || "Anonymous",
        loggedIn: true,
      };
    case USER_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        username: null,
        userError: action.error,
        loggedIn: false,
      };
    case LOGOUT_CALL_FETCH:
      return { ...state, fetching: true, userError: null };
    case LOGOUT_CALL_SUCCESS:
      return {
        loggedIn: false,
        fetching: false,
        username: null,
        userError: null,
      };
    case LOGOUT_CALL_FAILURE:
      return { ...state, fetching: false, userError: action.error };

    default:
      return state;
  }
};
