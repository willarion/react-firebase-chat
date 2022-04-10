import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import Button from "@mui/material/Button";

export const SignIn = () => {
  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const handleAnonymousLogin = () => {
    auth.signInAnonymously().catch(console.log);
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
