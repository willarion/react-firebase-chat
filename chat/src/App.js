import { AppMain, AppWrap } from "./App.styled";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChatView } from "./components/ChatView";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  USER_CALL_FAILURE,
  USER_CALL_FETCH,
  USER_CALL_SUCCESS,
} from "./store/actions/userActionTypes";
import { Header } from "./components/Header";

export const App = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { loggedIn, fetching } = useSelector((state) => state.user);

  console.log(store);

  const [user, loading] = useAuthState(auth);

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

  return (
    <AppWrap>
      <Header />
      {loggedIn && !fetching && (
        <AppMain>
          <ChatView />
        </AppMain>
      )}
      {fetching && <p>Fetching...</p>}
    </AppWrap>
  );
};
