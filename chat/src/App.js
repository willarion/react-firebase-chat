import { AppWrap } from "./App.styled";
import { SignIn } from "./components/SignIn";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChatView } from "./components/ChatView";
import { SignOut } from "./components/SignOut";

export const App = () => {
  const [user] = useAuthState(auth);

  return (
    <AppWrap>
      <header>{auth.currentUser && <SignOut />}</header>
      <section>{user ? <ChatView /> : <SignIn />}</section>
    </AppWrap>
  );
};
