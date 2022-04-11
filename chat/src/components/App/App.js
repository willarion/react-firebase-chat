import { AppMain, AppWrap } from "./App.styled";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChatView } from "../ChatView";
import { useSelector } from "react-redux";
import { Header } from "../Header";
import { Loader } from "../Loader";
import { useUser } from "./useUser";

export const App = () => {
  const { loggedIn, fetching } = useSelector((state) => state.user);
  const [user, loading] = useAuthState(auth);
  useUser(user, loading);

  return (
    <AppWrap>
      {fetching ? (
        <Loader />
      ) : (
        <>
          <Header />
          {loggedIn && !fetching && (
            <AppMain>
              <ChatView />
            </AppMain>
          )}
        </>
      )}
    </AppWrap>
  );
};
