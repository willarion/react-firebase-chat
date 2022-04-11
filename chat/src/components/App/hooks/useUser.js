import { useEffect } from "react";
import {
  SET_USER_COLOR,
  USER_CALL_FAILURE,
  USER_CALL_FETCH,
  USER_CALL_SUCCESS,
} from "../../../store/actions/user";
import { useDispatch } from "react-redux";
import { getUserColor } from "../../../helpers";

export const useUser = (user, loading) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      getUserColor(user.uid)
        .then((doc) =>
          dispatch({ type: SET_USER_COLOR, color: doc.data().color })
        )
        .catch((err) => console.log(err));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (loading) {
      dispatch({ type: USER_CALL_FETCH });
    } else if (user && !loading) {
      dispatch({
        type: USER_CALL_SUCCESS,
        user: { username: user.displayName },
      });
    } else if (!user && !loading) {
      dispatch({ type: USER_CALL_FAILURE });
    }
  }, [dispatch, loading, user]);
};
