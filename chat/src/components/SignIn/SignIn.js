import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import Button from "@mui/material/Button";

export const SignIn = () => {
  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <Button type="button" onClick={handleGoogleLogin}>
      Sign In with Google
    </Button>
  );
};
