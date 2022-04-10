import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actions/user";

export const SignIn = () => {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    const method = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      return auth.signInWithPopup(provider);
    };

    dispatch(signIn(method));
  };

  const handleAnonymousLogin = () => {
    const method = () => {
      return auth.signInAnonymously();
    };

    dispatch(signIn(method));
  };

  return (
    <>
      <Button type="button" onClick={handleGoogleLogin}>
        Sign In with Google
      </Button>
      <Button type="button" onClick={handleAnonymousLogin}>
        Sign In Anonymously
      </Button>
    </>
  );
};
