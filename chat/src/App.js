import { AppHeader, AppMain, AppWrap } from "./App.styled";
import { SignIn } from "./components/SignIn";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChatView } from "./components/ChatView";
import { SignOut } from "./components/SignOut";

export const App = () => {
  const [user] = useAuthState(auth);

  return (
    <AppWrap>
      <AppHeader>{auth.currentUser ? <SignOut /> : <SignIn />}</AppHeader>
      {user && (
        <AppMain>
          <ChatView />
        </AppMain>
      )}
    </AppWrap>
  );
};
