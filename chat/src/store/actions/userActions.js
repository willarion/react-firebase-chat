import {
  LOGOUT_CALL_FAILURE,
  LOGOUT_CALL_FETCH,
  LOGOUT_CALL_SUCCESS,
  USER_CALL_FAILURE,
  USER_CALL_FETCH,
  USER_CALL_SUCCESS,
} from "./userActionTypes";
import { auth } from "../../firebase";

export const signIn = (method) => {
  return async (dispatch) => {
    dispatch({ type: USER_CALL_FETCH });

    method()
      .then((data) => {
        dispatch({
          type: USER_CALL_SUCCESS,
          user: {
            username: data.user.displayName,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: USER_CALL_FAILURE,
          payload: error,
        });
      });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT_CALL_FETCH });

    auth
      .signOut()
      .then(() => {
        dispatch({ type: LOGOUT_CALL_SUCCESS });
      })
      .catch((error) => dispatch({ type: LOGOUT_CALL_FAILURE, error }));
  };
};
